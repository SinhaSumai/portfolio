/* =========================================================
   cv-clone-worker
   Cloudflare Worker — serverless proxy for the "clone-me"
   feature on the portfolio site.

   Why this exists: GitHub Pages only serves static files, so it
   can't hold a secret API key. This Worker holds the Anthropic
   API key (as a Worker secret, never in source) and is the only
   thing that talks to the Claude API. The static site POSTs raw
   CV text here and gets back structured profile JSON + a short
   list of follow-up questions.

   Deploy (one-time):
     1. npm install -g wrangler
     2. wrangler login
     3. wrangler secret put ANTHROPIC_API_KEY   (paste your key when prompted)
     4. wrangler deploy
     5. Copy the printed *.workers.dev URL into AI_WORKER_URL in script.js
        (set it to that URL + "/extract")

   Cost control: CORS below restricts browser callers to your own
   site, but that does NOT stop someone from calling this Worker
   directly with curl. Set a spend cap in the Anthropic console
   (console.anthropic.com -> Settings -> Limits) so a worst-case
   abuse scenario costs you a fixed, small amount and never more.
   ========================================================= */

const MODEL = "claude-haiku-4-5-20251001";
const MAX_CV_CHARS = 20000;
const MAX_TOKENS = 2000;

const SYSTEM_PROMPT = `You read a person's CV/resume text and convert it into a strict JSON object describing their professional profile, matching this exact shape:

{
  "profile": {
    "name": string,
    "title": string,            // short professional headline, e.g. "ML Engineer — Computer Vision"
    "location": string,         // city/country if findable, else ""
    "status": string,           // short availability line if inferable, else ""
    "email": string,            // else ""
    "github": string,           // full URL if present, else ""
    "linkedin": string,         // full URL if present, else ""
    "scholar": string,          // full URL if present, else ""
    "about": string,            // 2-4 sentence first/third-person summary, written fresh from the CV content
    "projects": [
      { "title": string, "tag": string, "bullets": [string, ...], "metrics": [string, ...] }
    ],
    "experience": [
      { "date": string, "role": string, "org": string, "desc": string }
    ],
    "education": { "school": string, "degree": string, "date": string, "gpa": string, "honors": string, "coursework": [string, ...] },
    "skills": [
      { "label": string, "items": [string, ...] }
    ]
  },
  "questions": [
    { "field": string, "prompt": string }
  ]
}

Rules:
- Output ONLY the JSON object. No markdown fences, no commentary.
- Use information that is actually present or directly inferable in the CV. Do not invent employers, schools, dates, or metrics.
- "projects" should be the 3-6 most substantial projects/research items found; omit the field entirely (empty array) if none are clear.
- "questions" must contain 2 to 4 short items asking the person to fill genuine gaps or personalize the result. Always include exactly one item with "field": "theme" and "prompt" asking them to pick a color theme: green, amber, or blue. The other 1-3 questions should target real missing/ambiguous fields you could not confidently fill (e.g. missing email, missing location, ambiguous current title) — do not ask filler questions if the CV is already complete; in that case include only the theme question plus at most one more.
- Keep "prompt" text short (one sentence) and friendly, written as if a terminal is asking the question.`;

function corsHeaders(origin, allowedOrigins) {
  if (origin && allowedOrigins.includes(origin)) {
    return {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Vary": "Origin"
    };
  }
  return { "Vary": "Origin" };
}

function jsonResponse(body, status, headers) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...headers }
  });
}

function extractJson(text) {
  let cleaned = text.trim();
  const fenced = cleaned.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenced) cleaned = fenced[1].trim();
  return JSON.parse(cleaned);
}

export default {
  async fetch(request, env) {
    const allowedOrigins = (env.ALLOWED_ORIGINS || "")
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);
    const origin = request.headers.get("Origin") || "";
    const cors = corsHeaders(origin, allowedOrigins);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/") {
      return jsonResponse({ ok: true, message: "cv-clone-worker is running" }, 200, cors);
    }

    if (request.method !== "POST" || url.pathname !== "/extract") {
      return jsonResponse({ error: "not found" }, 404, cors);
    }

    if (!allowedOrigins.includes(origin)) {
      return jsonResponse({ error: "origin not allowed" }, 403, cors);
    }

    if (!env.ANTHROPIC_API_KEY) {
      return jsonResponse({ error: "server misconfigured: missing API key" }, 500, cors);
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return jsonResponse({ error: "invalid JSON body" }, 400, cors);
    }

    const cvText = typeof payload.cvText === "string" ? payload.cvText.slice(0, MAX_CV_CHARS) : "";
    if (!cvText.trim()) {
      return jsonResponse({ error: "cvText is required" }, 400, cors);
    }

    let anthropicRes;
    try {
      anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: MAX_TOKENS,
          system: SYSTEM_PROMPT,
          messages: [{ role: "user", content: `CV TEXT:\n\n${cvText}` }]
        })
      });
    } catch (err) {
      return jsonResponse({ error: "failed to reach Anthropic API" }, 502, cors);
    }

    if (!anthropicRes.ok) {
      const detail = await anthropicRes.text().catch(() => "");
      return jsonResponse({ error: "Anthropic API error", detail: detail.slice(0, 500) }, 502, cors);
    }

    const data = await anthropicRes.json();
    const text = data?.content?.[0]?.text || "";

    let parsed;
    try {
      parsed = extractJson(text);
    } catch (err) {
      return jsonResponse({ error: "model did not return valid JSON" }, 502, cors);
    }

    if (!parsed.profile) {
      return jsonResponse({ error: "model response missing profile" }, 502, cors);
    }

    return jsonResponse(parsed, 200, cors);
  }
};
