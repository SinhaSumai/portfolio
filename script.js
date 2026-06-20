/* =========================================================
   Content data — sourced from Sumaiya Sinha's CV.
   Edit the strings below to update the site; no other
   file needs to change.
   ========================================================= */

/* DATA_START */
const DATA = {
  name: "Sumaiya Sinha",
  title: "ML Engineer — Computer Vision · Multimodal AI · NLP",
  location: "Dhaka, Bangladesh",
  status: "Open to remote & relocation",
  email: "sumaiya.sinha@g.bracu.ac.bd",
  github: "https://github.com/SinhaSumai",
  linkedin: "https://www.linkedin.com/in/sumaiya-sinha-1a42a8296/",
  scholar: "https://scholar.google.com/citations?user=I4lL9tAAAAAJ&hl=en",

  about: `ML Engineer with production experience in computer vision, multimodal AI, and NLP.
Research background through UIUC++ (2024, 2026) in LLM evaluation, code translation, and
program analysis. Strong track record of shipping end-to-end systems — from model training
and fine-tuning to inference optimization and automation infrastructure.`,

  projects: [
    {
      id: "ocr",
      title: "German License Plate OCR System",
      tag: "Bengal Byte · Computer Vision",
      bullets: [
        "Evaluated SVTR-Base (STN-based rectification + custom augmentation), PP-OCRv5, and a from-scratch PyTorch CRNN to find the best approach for German license plate OCR.",
        "Selected SVTR-Base as the production model after iterating across learning-rate schedules, two-stage fine-tuning, and ensemble methods.",
        "Built a CRNN baseline from scratch in PyTorch to independently benchmark the fine-tuned transformer approach.",
        "Diagnosed validation/test accuracy divergence and engineered a custom augmentation pipeline (geometric distortion, deterioration, color jitter) tuned for real-world test performance."
      ],
      metrics: ["95.67% word accuracy", "98.29% character accuracy", "91.10% CRNN baseline (exact match)"]
    },
    {
      id: "llm-judge",
      title: "LLM Judge — Evaluation Framework for CV/VLM Systems",
      tag: "Bengal Byte · LLM Evaluation",
      bullets: [
        "Built an automated LLM-as-a-judge evaluation framework for CV/VLM systems, measuring semantic consistency, visual grounding, and reasoning reliability beyond standard accuracy metrics.",
        "Designed controlled prompt-variation robustness tests; implemented multi-signal reliability scoring (semantic similarity, visual evidence verification, coherence checks) to surface hallucinations, bias, and unstable reasoning.",
        "Integrated HuggingFace Transformers for model loading and inference; kept the evaluation design model-agnostic across vision-language architectures."
      ],
      metrics: []
    },
    {
      id: "yolo-pipeline",
      title: "ML Training Infrastructure Automation (YOLOv11 Pipeline)",
      tag: "Bengal Byte · ML Infrastructure",
      bullets: [
        "Designed and built an end-to-end automation pipeline keeping GPU training servers continuously utilized — automating dataset retrieval, job scheduling, and result collection with no manual intervention.",
        "Engineered an automated job queue that parses hyperparameter rows, deduplicates completed runs, and launches new training jobs on idle servers, paired with server-monitoring automation.",
        "Built a results pipeline via a Make.com webhook to auto-fetch training outputs to AWS S3; added post-training export converting weights from .pt to ONNX for TensorRT deployment."
      ],
      metrics: []
    },
    {
      id: "code-translation",
      title: "LLM Code Translation Evaluation — “Lost in Translation” Study",
      tag: "UIUC++ SRSE · Apr–Aug 2024 · Research",
      bullets: [
        "Implemented LLM-generated Rust translation experiments and evaluation pipelines in Python.",
        "Compared translation outputs of GPT-based models with C2Rust and transpilation benchmarks to evaluate syntactic correctness and code fidelity.",
        "Proposed readability and trust metrics for LLM-generated code using Rust compiler docs and linter diagnostics.",
        "Labeled 30+ mutants in an open dataset for mutation-based evaluation."
      ],
      metrics: [],
      note: "Supervisors: Prof. Darko Marinov, Reyhan Jabbarvand"
    },
    {
      id: "thesis",
      title: "Code-Mixed Hate Speech Detection (Undergraduate Thesis)",
      tag: "BRAC University · NLP · 2023–2024",
      bullets: [
        "Proposed a multi-model Transformer framework integrating BERT, BanglaBERT, mBERT, and LSTM-GRU hybrids to detect implicit and explicit sexist remarks in multilingual text.",
        "Designed a data preprocessing pipeline for Bangla-English code-mixing: token normalization, transliteration, and class rebalancing with focal loss.",
        "Developed a fine-tuning architecture in PyTorch with dynamic learning-rate scheduling, dropout regularization, and weighted cross-entropy loss.",
        "Built a dataset of 7,000 annotated samples in collaboration with Bengali.ai.",
        "Ran ablation studies on contextual embeddings — BanglaBERT + LSTM fusion gave the best performance for low-resource multilingual classification."
      ],
      metrics: ["90% accuracy", "+12% F1 over baseline"],
      cite: "S. Sinha et al., “Identifying Code-Mixed and Code-Switched Hateful Remarks on Social Media using NLP,” BRAC University, 2024. Supervisor: Dr. Farig Yousuf Sadeque."
    }
  ],

  experience: [
    {
      date: "Jun 2026 – Present",
      role: "Research Assistant — UIUC++ SRSE",
      org: "Remote · Supervisors: Prof. Darko Marinov, Wenxi Wang, Lize Shao",
      desc: "Working on a survey of autoregressive and diffusion code generation models.",
      links: []
    },
    {
      date: "Sep 2024 – Present",
      role: "Machine Learning Engineer — Bengal Byte",
      org: "Remote · Computer vision, multimodal AI, and ML infrastructure",
      desc: "Shipped an LLM-as-a-judge evaluation framework, a production OCR system, and GPU training automation infra.",
      links: ["llm-judge", "ocr", "yolo-pipeline"]
    },
    {
      date: "Apr – Aug 2024",
      role: "Research Assistant — UIUC++ SRSE",
      org: "Remote · Supervisors: Prof. Darko Marinov, Reyhan Jabbarvand",
      desc: "Lost in Translation replication study: LLM-generated Rust translation experiments and evaluation pipelines.",
      links: ["code-translation"]
    },
    {
      date: "2023 – 2024",
      role: "Undergraduate Thesis — BRAC University",
      org: "Supervisor: Dr. Farig Yousuf Sadeque",
      desc: "Code-mixed and code-switched hateful remark detection on social media using NLP.",
      links: ["thesis"]
    },
    {
      date: "Oct 2022 – Jan 2024",
      role: "Teaching Assistant — BRAC University",
      org: "Undergraduate ML & CS courses",
      desc: "Graded projects and led tutorial sessions for 100+ students; designed problem sets and held weekly consultations.",
      links: []
    }
  ],

  education: {
    school: "BRAC University, Dhaka, Bangladesh",
    degree: "B.Sc. in Computer Science and Engineering (CSE)",
    date: "May 2024",
    gpa: "CGPA: 3.81 / 4.00",
    honors: "Highest Distinction · Dean’s List (3×) · Vice Chancellor’s List (3×) · IELTS: 7.0",
    coursework: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Natural Language Processing", "Algorithms", "Linear Algebra", "Probability & Statistics"]
  },

  skills: [
    { label: "Languages", items: ["Python", "JavaScript"] },
    { label: "ML Frameworks", items: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "HuggingFace Transformers", "PaddleOCR"] },
    { label: "Techniques", items: ["Transfer Learning", "Fine-Tuning", "CNN", "RNN", "LSTM", "GRU", "YOLO", "OCR", "Cross-Lingual Modeling", "LLM Evaluation", "VLM", "Prompt Engineering"] },
    { label: "Inference & Deploy", items: ["ONNX", "TensorRT", "Docker", "AWS S3", "Vast.ai"] },
    { label: "Tools & Infra", items: ["Git", "Linux", "VS Code", "Roboflow", "Anaconda", "Make/Integromat", "Google Sheets API"] }
  ]
};
/* DATA_END */

/* Feature flags — flip to false to pull a feature without touching
   anything else in the file. */
const FEATURES = { githubStats: true, hasResume: true, aiClone: false };

/* Cloudflare Worker endpoint for the AI "clone-me" feature.
   Replace with your deployed worker URL (see ai-worker/ for the backend code). */
const AI_WORKER_URL = "https://YOUR-WORKER-SUBDOMAIN.workers.dev/extract";

/* =========================================================
   Rendering helpers
   ========================================================= */

function renderAbout(d = DATA) {
  return `
    <div class="out">
      <p style="color:var(--text);font-size:16px;font-weight:600;margin-bottom:2px;">${d.name}</p>
      <p class="muted" style="margin-bottom:10px;">${d.title}</p>
      <p class="muted">${d.location} · ${d.status}</p>
      <p style="margin-top:12px;white-space:pre-line;">${d.about}</p>
      <div class="links-row">
        ${d.github ? `<a href="${d.github}" target="_blank" rel="noopener">${d.github.replace("https://", "")}</a>` : ""}
        ${d.linkedin ? `<a href="${d.linkedin}" target="_blank" rel="noopener">linkedin</a>` : ""}
        ${d.scholar ? `<a href="${d.scholar}" target="_blank" rel="noopener">google scholar</a>` : ""}
        ${d.email ? `<a href="mailto:${d.email}">${d.email}</a>` : ""}
      </div>
      <p class="muted" style="margin-top:14px;">Type <span class="fileref" data-run="help">help</span> to see all commands, or <span class="fileref" data-run="projects">projects</span> to jump straight to the work.</p>
    </div>`;
}

function renderProjects(d = DATA) {
  if (!d.projects.length) return `<div class="out"><h2>Projects</h2><p class="muted">nothing here yet.</p></div>`;
  const cards = d.projects.map(p => `
    <div class="card" data-card="${p.id}">
      <div class="card-title">${p.title}</div>
      <div class="card-tag">${p.tag}</div>
      <ul>${(p.bullets || []).map(b => `<li>${b}</li>`).join("")}</ul>
      ${(p.metrics || []).length ? `<div class="metric-row">${p.metrics.map(m => `<span class="metric">${m}</span>`).join("")}</div>` : ""}
      ${p.note ? `<p class="muted" style="font-size:12px;margin-top:8px;">${p.note}</p>` : ""}
      ${p.cite ? `<div class="cite">${p.cite}</div>` : ""}
    </div>
  `).join("");
  return `<div class="out"><h2>Projects</h2><div class="project-grid">${cards}</div></div>`;
}

function renderExperience(d = DATA) {
  if (!d.experience.length) return `<div class="out"><h2>Experience &amp; Research</h2><p class="muted">nothing here yet.</p></div>`;
  const items = d.experience.map(e => `
    <div class="tl-item">
      <div class="tl-date">${e.date}</div>
      <div class="tl-role">${e.role}</div>
      <div class="tl-org">${e.org}</div>
      <p class="tl-desc">${e.desc}</p>
      ${(e.links || []).length ? e.links.map(id => `<span class="tl-link fileref" data-goto="${id}">view project →</span>`).join("  ") : ""}
    </div>
  `).join("");
  return `<div class="out"><h2>Experience &amp; Research</h2><div class="timeline">${items}</div></div>`;
}

function renderEducation(d = DATA) {
  const ed = d.education;
  if (!ed || !ed.school) return `<div class="out"><h2>Education</h2><p class="muted">nothing here yet.</p></div>`;
  return `
    <div class="out">
      <h2>Education</h2>
      <div class="edu-block">
        <div class="edu-degree">${ed.degree}</div>
        <div class="edu-meta">${ed.school} · ${ed.date} · ${ed.gpa}</div>
        <p class="muted">${ed.honors}</p>
        <div class="tag-list">${(ed.coursework || []).map(c => `<span class="tag">${c}</span>`).join("")}</div>
      </div>
    </div>`;
}

function renderSkills(d = DATA) {
  if (!d.skills.length) return `<div class="out"><h2>Skills</h2><p class="muted">nothing here yet.</p></div>`;
  const groups = d.skills.map(g => `
    <div class="skill-group">
      <div class="skill-group-label">${g.label}</div>
      <div class="chips">${(g.items || []).map(i => `<span class="chip">${i}</span>`).join("")}</div>
    </div>
  `).join("");
  return `<div class="out"><h2>Skills</h2>${groups}</div>`;
}

function renderContact(d = DATA) {
  return `
    <div class="out">
      <h2>Contact</h2>
      <div class="contact-list">
        ${d.email ? `<div class="row"><span class="k">email</span><a href="mailto:${d.email}">${d.email}</a> <button class="btn" data-copy="${d.email}" style="margin-left:8px;">copy</button></div>` : ""}
        ${d.github ? `<div class="row"><span class="k">github</span><a href="${d.github}" target="_blank" rel="noopener">${d.github.replace("https://", "")}</a></div>` : ""}
        ${d.linkedin ? `<div class="row"><span class="k">linkedin</span><a href="${d.linkedin}" target="_blank" rel="noopener">${d.linkedin.replace("https://", "")}</a></div>` : ""}
        ${d.scholar ? `<div class="row"><span class="k">scholar</span><a href="${d.scholar}" target="_blank" rel="noopener">google scholar</a></div>` : ""}
        <div class="row"><span class="k">location</span><span class="muted">${d.location} · ${d.status}</span></div>
      </div>
    </div>`;
}

function renderHelp() {
  const helpRows = [
    ["about", "profile & quick facts"],
    ["projects", "selected engineering & research projects"],
    ["experience", "work & research timeline"],
    ["education", "degree, honors, coursework"],
    ["skills", "languages, frameworks, tools"],
    ["contact", "how to reach me"]
  ];
  if (FEATURES.hasResume) helpRows.push(["resume", "download the pdf resume"]);
  if (FEATURES.githubStats) helpRows.push(["github", "live github stats"]);
  helpRows.push(["sysinfo", "neofetch-style system info"]);
  helpRows.push(["matrix", "toggle the matrix rain (Esc to exit)"]);
  if (FEATURES.aiClone) helpRows.push(["clone-me", "upload a cv, get your own ai-generated version of this site"]);
  helpRows.push(["ls", "list available sections"]);
  helpRows.push(["whoami", "one-line bio"]);
  helpRows.push(["clear", "clear the screen"]);
  helpRows.push(["help", "show this message"]);

  const table = rows => `<div class="help-table">${rows.map(([c, desc]) => {
    return `<span class="cmd fileref" data-run="${c}">${c}</span><span class="desc">${desc}</span>`;
  }).join("")}</div>`;

  return `<div class="out">${table(helpRows)}
    <p class="muted" style="margin-top:12px;">Tip: the tabs above the prompt run the same commands — every plain command name above is clickable too.</p></div>`;
}

function renderLs() {
  const files = [
    ["about.txt", "about"],
    ["projects/", "projects"],
    ["experience.log", "experience"],
    ["education.md", "education"],
    ["skills.json", "skills"],
    ["contact.sh", "contact"]
  ];
  return `<div class="out"><p>${files.map(([name, cmd]) => `<span class="fileref${name.endsWith("/") ? " dir" : ""}" data-run="${cmd}">${name}</span>`).join("  ")}</p></div>`;
}

function renderWhoami() {
  return `<div class="out"><p>sumaiya-sinha — ml engineer @ bengal byte · researcher @ uiuc++ srse</p></div>`;
}

function renderSysinfo() {
  const art = [
    " ______________",
    "|  SUMAIYA.AI  |",
    "|              |",
    "|     &gt;_       |",
    "|______________|"
  ].join("\n");

  const specs = [
    ["user", "sumaiya@portfolio"],
    ["os", "SumaiyaOS (web)"],
    ["host", DATA.location],
    ["shell", "fake-bash 5.2"],
    ["languages", "Python, JavaScript"],
    ["ml frameworks", "PyTorch, TensorFlow, HuggingFace"],
    ["focus", "Computer Vision · Multimodal AI · NLP"],
    ["uptime", "shipping since 2022"]
  ];

  const specsHtml = specs.map(([k, v]) => `<p><span class="k">${k}</span>${v}</p>`).join("");
  return `<div class="out"><div class="neofetch"><pre>${art}</pre><div class="specs">${specsHtml}</div></div></div>`;
}

function renderVim() {
  return `<div class="out"><p>~<br>~<br>~<br><span class="accent">-- INSERT --</span><br>~<br>~</p><p class="muted">You have entered vim. To exit, type <span class="fileref" data-run=":wq">:wq</span> and pray.</p></div>`;
}

function renderVimQuit() {
  return `<div class="out"><p class="muted">Wise choice. Returning to bash.</p></div>`;
}

function renderCoffee() {
  const art = [
    "   ( (",
    "    ) )",
    "  ........",
    "  |      |]",
    "  \\      /",
    "   '----'"
  ].join("\n");
  return `<div class="out"><pre>${art}</pre><p class="muted">Brewing... done. Productivity +100%.</p></div>`;
}

function render42() {
  return `<div class="out"><p style="font-size:22px;color:var(--accent);">42</p><p class="muted">The answer to life, the universe, and everything.</p></div>`;
}

/* =========================================================
   Terminal engine
   ========================================================= */

const screen = document.getElementById("screen");
const input = document.getElementById("cmd-input");
const tabs = document.getElementById("tabs");

const COMMANDS = {
  about: renderAbout,
  projects: renderProjects,
  experience: renderExperience,
  education: renderEducation,
  skills: renderSkills,
  contact: renderContact,
  help: renderHelp,
  ls: renderLs,
  whoami: renderWhoami,
  sysinfo: renderSysinfo,
  neofetch: renderSysinfo,
  vim: renderVim,
  ":q": renderVimQuit,
  ":wq": renderVimQuit,
  ":q!": renderVimQuit,
  ":x": renderVimQuit,
  coffee: renderCoffee,
  42: render42,
  matrix: () => {
    const turningOn = !document.body.classList.contains("matrix-active");
    toggleMatrix();
    return turningOn
      ? `<div class="out"><p class="accent">entering the matrix...</p><p class="muted">type 'matrix' again or press Esc to exit.</p></div>`
      : `<div class="out"><p class="muted">back to reality.</p></div>`;
  }
};

if (FEATURES.hasResume) {
  COMMANDS.resume = () => { downloadResume(); return `<div class="out"><p class="muted">Downloading resume.pdf…</p></div>`; };
  COMMANDS.download = () => { downloadResume(); return `<div class="out"><p class="muted">Downloading resume.pdf…</p></div>`; };
  COMMANDS["download resume"] = COMMANDS.download;
}

if (FEATURES.githubStats) {
  COMMANDS.github = () => {
    const loadingId = "gh-" + Date.now();
    loadGithubStats(loadingId);
    return `<div class="out" id="${loadingId}"><p class="muted">fetching live github stats…</p></div>`;
  };
}

if (FEATURES.aiClone) {
  COMMANDS["clone-me"] = () => { runCloneMe(); return ""; };
  COMMANDS.generate = COMMANDS["clone-me"];
}

let history = [];
let historyPos = -1;

function scrollToBottom() {
  screen.scrollTop = screen.scrollHeight;
}

function printCommandLine(cmd) {
  const div = document.createElement("div");
  div.className = "line-cmd";
  div.innerHTML = `<span class="prompt-sym">sumaiya@portfolio:~$</span> <span class="typed"></span>`;
  div.querySelector(".typed").textContent = cmd;
  screen.appendChild(div);
}

function printOutputHTML(html) {
  const wrap = document.createElement("div");
  wrap.innerHTML = html;
  while (wrap.firstChild) screen.appendChild(wrap.firstChild);
}

function setActiveTab(cmd) {
  [...tabs.querySelectorAll("button")].forEach(b => {
    b.classList.toggle("active", b.dataset.cmd === cmd);
  });
}

function runCommand(raw, opts = {}) {
  const cmd = raw.trim();
  const startIndex = screen.children.length;
  if (!opts.silent) printCommandLine(cmd || " ");
  if (!cmd) return;

  const key = cmd.toLowerCase();

  if (key === "clear") {
    screen.innerHTML = "";
    return;
  }

  let html;
  if (key === "date") {
    html = `<div class="out"><p>${new Date().toString()}</p></div>`;
  } else if (key.startsWith("sudo")) {
    if (key.includes("rm -rf")) {
      html = `<div class="out"><p class="err">Nope. Nice try though.</p><p class="muted">Nothing here is real except the data. <span class="fileref" data-run="contact">contact</span> me instead.</p></div>`;
    } else {
      html = `<div class="out"><p class="warn">Permission denied: nice try. Email me instead — see <span class="fileref" data-run="contact">contact</span>.</p></div>`;
    }
  } else if (key.startsWith("theme")) {
    const arg = cmd.slice(5).trim().toLowerCase();
    const valid = ["green", "amber", "blue"];
    if (!arg) {
      html = `<div class="out"><p>current theme: <span class="accent">${currentTheme}</span></p><p class="muted">usage: theme &lt;${valid.join(" | ")}&gt;</p></div>`;
    } else if (valid.includes(arg)) {
      setTheme(arg);
      html = `<div class="out"><p class="muted">theme switched to <span class="accent">${arg}</span>.</p></div>`;
    } else {
      html = `<div class="out"><p class="err">unknown theme "${escapeHtml(arg)}"</p><p class="muted">usage: theme &lt;${valid.join(" | ")}&gt;</p></div>`;
    }
  } else if (COMMANDS[key]) {
    setActiveTab(key);
    html = COMMANDS[key]();
  } else {
    html = `<div class="out"><p><span class="err">bash: ${escapeHtml(cmd)}: command not found</span> <span class="muted">— type <span class="fileref" data-run="help">help</span></span></p></div>`;
  }

  printOutputHTML(html);

  // Scroll so the *start* of this command's output lands at the top —
  // otherwise a long section (e.g. projects) opens scrolled to its last item.
  const anchor = screen.children[startIndex];
  if (anchor) {
    anchor.scrollIntoView({ behavior: opts.silent ? "auto" : "smooth", block: "start" });
  } else {
    scrollToBottom();
  }
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function goToProject(id) {
  if (!screen.querySelector(`[data-card="${id}"]`)) {
    runCommand("projects", { silent: true });
  }
  const target = screen.querySelector(`[data-card="${id}"]`);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "center" });
  target.classList.remove("highlight");
  requestAnimationFrame(() => {
    target.classList.add("highlight");
    setTimeout(() => target.classList.remove("highlight"), 2300);
  });
}

/* ---------- Event wiring ---------- */

function getCompletionPool() {
  return [...new Set(Object.keys(COMMANDS).concat(["clear", "date", "theme"]))].filter(c => !c.includes(" ") && !c.startsWith(":"));
}

input.addEventListener("keydown", e => {
  if (pendingAnswer) {
    if (e.key === "Enter") {
      const val = input.value;
      printCommandLine(val);
      input.value = "";
      const resolve = pendingAnswer;
      pendingAnswer = null;
      resolve(val);
    }
    return;
  }
  if (e.key === "Enter") {
    const val = input.value;
    runCommand(val);
    if (val.trim()) {
      history.push(val);
      historyPos = history.length;
    }
    input.value = "";
  } else if (e.key === "ArrowUp") {
    if (historyPos > 0) {
      historyPos--;
      input.value = history[historyPos] || "";
    }
    e.preventDefault();
  } else if (e.key === "ArrowDown") {
    if (historyPos < history.length) {
      historyPos++;
      input.value = history[historyPos] || "";
    }
    e.preventDefault();
  } else if (e.key === "Tab") {
    e.preventDefault();
    const val = input.value.trim().toLowerCase();
    if (!val) return;
    const matches = getCompletionPool().filter(c => c.startsWith(val));
    if (matches.length === 1) {
      input.value = matches[0];
    } else if (matches.length > 1) {
      printCommandLine(input.value);
      printOutputHTML(`<div class="out"><p class="muted">${matches.join("   ")}</p></div>`);
      scrollToBottom();
    }
  }
});

tabs.addEventListener("click", e => {
  const btn = e.target.closest("button[data-cmd]");
  if (!btn) return;
  runCommand(btn.dataset.cmd);
  input.focus();
});

screen.addEventListener("click", e => {
  const ref = e.target.closest("[data-run]");
  if (ref) {
    runCommand(ref.dataset.run);
    input.focus();
    return;
  }
  const goto = e.target.closest("[data-goto]");
  if (goto) {
    goToProject(goto.dataset.goto);
    return;
  }
  const copy = e.target.closest("[data-copy]");
  if (copy) {
    navigator.clipboard.writeText(copy.dataset.copy).then(() => {
      const original = copy.textContent;
      copy.textContent = "copied!";
      copy.classList.add("copied");
      setTimeout(() => { copy.textContent = original; copy.classList.remove("copied"); }, 1500);
    });
  }
});

document.body.addEventListener("click", () => input.focus());

/* ---------- Window controls (traffic lights) ---------- */

const terminalEl = document.getElementById("terminal");
const closedScreen = document.getElementById("closed-screen");
const reopenBtn = document.getElementById("reopen-btn");
const minTab = document.getElementById("min-tab");

let savedPos = null;

document.querySelectorAll(".dot").forEach(dot => {
  dot.addEventListener("click", e => {
    e.stopPropagation();
    const action = dot.dataset.action;
    if (action === "close") {
      terminalEl.style.display = "none";
      closedScreen.hidden = false;
    } else if (action === "minimize") {
      terminalEl.style.display = "none";
      minTab.hidden = false;
    } else if (action === "maximize") {
      const enteringMax = !terminalEl.classList.contains("maximized");
      if (enteringMax) {
        savedPos = { left: terminalEl.style.left, top: terminalEl.style.top };
        terminalEl.style.left = "0px";
        terminalEl.style.top = "0px";
      } else if (savedPos) {
        terminalEl.style.left = savedPos.left;
        terminalEl.style.top = savedPos.top;
        savedPos = null;
      }
      terminalEl.classList.toggle("maximized");
      document.body.classList.toggle("fs-active");
    }
  });
});

reopenBtn.addEventListener("click", () => {
  closedScreen.hidden = true;
  terminalEl.style.display = "";
  input.focus();
});

minTab.addEventListener("click", () => {
  minTab.hidden = true;
  terminalEl.style.display = "";
  input.focus();
});

/* ---------- Drag to move ---------- */

let dragState = null;

function startDrag(e) {
  if (window.innerWidth <= 640) return;
  if (terminalEl.classList.contains("maximized")) return;
  if (e.target.closest(".dot")) return;
  const rect = terminalEl.getBoundingClientRect();
  dragState = { offsetX: e.clientX - rect.left, offsetY: e.clientY - rect.top, width: rect.width };
  terminalEl.style.position = "fixed";
  terminalEl.style.margin = "0";
  terminalEl.style.left = rect.left + "px";
  terminalEl.style.top = rect.top + "px";
  terminalEl.classList.add("dragging");
  document.body.classList.add("dragging-active");
}

function onDrag(e) {
  if (!dragState) return;
  const margin = 60;
  let left = e.clientX - dragState.offsetX;
  let top = e.clientY - dragState.offsetY;
  left = Math.min(Math.max(left, margin - dragState.width), window.innerWidth - margin);
  top = Math.min(Math.max(top, 0), window.innerHeight - 40);
  terminalEl.style.left = left + "px";
  terminalEl.style.top = top + "px";
}

function endDrag() {
  if (!dragState) return;
  dragState = null;
  terminalEl.classList.remove("dragging");
  document.body.classList.remove("dragging-active");
}

document.querySelector(".titlebar").addEventListener("pointerdown", startDrag);
document.addEventListener("pointermove", onDrag);
document.addEventListener("pointerup", endDrag);

window.addEventListener("resize", () => {
  if (terminalEl.style.position !== "fixed" || terminalEl.classList.contains("maximized")) return;
  const rect = terminalEl.getBoundingClientRect();
  const margin = 60;
  const left = Math.min(Math.max(rect.left, margin - rect.width), window.innerWidth - margin);
  const top = Math.min(Math.max(rect.top, 0), window.innerHeight - 40);
  terminalEl.style.left = left + "px";
  terminalEl.style.top = top + "px";
});

/* ---------- Resume download ---------- */

function downloadResume() {
  const a = document.createElement("a");
  a.href = "resume-2026.pdf";
  a.download = "Sumaiya_Sinha_Resume.pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/* ---------- Theme switcher ---------- */

let currentTheme = "green";

function setTheme(name) {
  currentTheme = name;
  if (name === "green") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", name);
  }
  updateBgAccentColor();
}

/* =========================================================
   Ambient 3D background (Three.js wireframe) + cursor tilt
   Purely decorative — fails silently and never blocks input.
   ========================================================= */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function getAccentColor() {
  return (getComputedStyle(document.documentElement).getPropertyValue("--accent") || "#4ade80").trim();
}

let bgScene = null; // { renderer, scene, camera, mesh }

function updateBgAccentColor() {
  if (bgScene) bgScene.mesh.material.color.set(getAccentColor());
}

async function initBgScene() {
  if (prefersReducedMotion || window.innerWidth <= 640) return;
  const canvas = document.getElementById("bg-canvas");
  if (!canvas || typeof THREE === "undefined") {
    try {
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js");
    } catch (err) {
      return; // decorative only — skip quietly if the CDN is unreachable
    }
  }
  if (!canvas || typeof THREE === "undefined") return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 9;

  const geometry = new THREE.IcosahedronGeometry(3.2, 1);
  const material = new THREE.MeshBasicMaterial({ color: getAccentColor(), wireframe: true, transparent: true, opacity: 0.35 });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  bgScene = { renderer, scene, camera, mesh };

  let mouseX = 0, mouseY = 0;
  window.addEventListener("mousemove", e => {
    mouseX = e.clientX / window.innerWidth - 0.5;
    mouseY = e.clientY / window.innerHeight - 0.5;
  });

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  (function animate() {
    requestAnimationFrame(animate);
    if (document.hidden) return;
    mesh.rotation.y += 0.0025 + (mouseX * 0.4 - mesh.rotation.y) * 0.01;
    mesh.rotation.x += 0.0012 + (mouseY * 0.4 - mesh.rotation.x) * 0.01;
    renderer.render(scene, camera);
  })();
}

initBgScene();

/* ---------- Cursor-reactive terminal tilt (CSS-only transform) ---------- */

if (!prefersReducedMotion) {
  document.addEventListener("mousemove", e => {
    if (window.innerWidth <= 640) return;
    if (terminalEl.classList.contains("dragging") || terminalEl.classList.contains("maximized")) return;
    const rect = terminalEl.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    const max = 4; // degrees
    const rotateY = Math.max(-1, Math.min(1, dx)) * max;
    const rotateX = Math.max(-1, Math.min(1, -dy)) * max;
    terminalEl.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
}

/* ---------- Matrix rain (toggle on/off) ---------- */

let matrixCanvas = null;
let matrixCtx = null;
let matrixCols = [];
let matrixTimer = null;

function toggleMatrix() {
  if (document.body.classList.contains("matrix-active")) {
    stopMatrix();
  } else {
    startMatrix();
  }
}

function resizeMatrixCanvas() {
  if (!matrixCanvas) return;
  matrixCanvas.width = window.innerWidth;
  matrixCanvas.height = window.innerHeight;
}

function startMatrix() {
  document.body.classList.add("matrix-active");
  matrixCanvas = document.createElement("canvas");
  matrixCanvas.id = "matrix-canvas";
  document.body.appendChild(matrixCanvas);
  matrixCtx = matrixCanvas.getContext("2d");
  resizeMatrixCanvas();
  const chars = "アイウエオカキクケコサシスセソタチツテト0123456789ABCDEF";
  const fontSize = 14;
  const columns = Math.floor(matrixCanvas.width / fontSize);
  matrixCols = new Array(columns).fill(0);
  matrixTimer = setInterval(() => {
    matrixCtx.fillStyle = "rgba(0, 0, 0, 0.08)";
    matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    matrixCtx.fillStyle = "#4ade80";
    matrixCtx.font = fontSize + "px monospace";
    matrixCols.forEach((y, i) => {
      const ch = chars[Math.floor(Math.random() * chars.length)];
      matrixCtx.fillText(ch, i * fontSize, y * fontSize);
      matrixCols[i] = y * fontSize > matrixCanvas.height && Math.random() > 0.975 ? 0 : y + 1;
    });
  }, 40);
  window.addEventListener("resize", resizeMatrixCanvas);
}

function stopMatrix() {
  document.body.classList.remove("matrix-active");
  if (matrixTimer) clearInterval(matrixTimer);
  matrixTimer = null;
  if (matrixCanvas) {
    matrixCanvas.remove();
    matrixCanvas = null;
  }
  window.removeEventListener("resize", resizeMatrixCanvas);
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && document.body.classList.contains("matrix-active")) {
    stopMatrix();
  }
});

/* ---------- Live GitHub stats ---------- */

function getGithubUsername(d = DATA) {
  try { return new URL(d.github).pathname.replace(/\//g, ""); } catch { return ""; }
}

async function loadGithubStats(targetId) {
  const username = getGithubUsername();
  if (!username) {
    const el = document.getElementById(targetId);
    if (el) el.innerHTML = `<p class="muted">no github link on file — see <span class="fileref" data-run="contact">contact</span>.</p>`;
    return;
  }
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error("bad response");
    const user = await res.json();
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=1`);
    const repos = reposRes.ok ? await reposRes.json() : [];
    const latest = repos[0];
    const el = document.getElementById(targetId);
    if (!el) return;
    el.innerHTML = `
      <h2>GitHub — live</h2>
      <div class="metric-row">
        <span class="metric">${user.public_repos} public repos</span>
        <span class="metric">${user.followers} followers</span>
        ${latest ? `<span class="metric">last updated: ${escapeHtml(latest.name)}</span>` : ""}
      </div>
      <p class="muted" style="margin-top:8px;"><a href="${user.html_url}" target="_blank" rel="noopener">${user.html_url.replace("https://", "")}</a></p>`;
  } catch (err) {
    const el = document.getElementById(targetId);
    if (el) el.innerHTML = `<p class="muted">couldn't reach the github api right now — see <span class="fileref" data-run="contact">contact</span> for the link directly.</p>`;
  }
}

/* =========================================================
   AI clone-me — upload a CV, get your own version of this site
   ========================================================= */

let pendingAnswer = null;

function askInTerminal(promptText) {
  return new Promise(resolve => {
    const div = document.createElement("div");
    div.className = "out";
    div.innerHTML = `<p class="accent">${escapeHtml(promptText)}</p>`;
    screen.appendChild(div);
    scrollToBottom();
    pendingAnswer = resolve;
  });
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("failed to load " + src));
    document.head.appendChild(s);
  });
}

function triggerCvUpload() {
  return new Promise(resolve => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "application/pdf";
    fileInput.style.display = "none";
    document.body.appendChild(fileInput);
    fileInput.addEventListener("change", () => {
      const file = fileInput.files[0] || null;
      fileInput.remove();
      resolve(file);
    }, { once: true });
    fileInput.click();
  });
}

async function extractPdfText(file) {
  await loadScript("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js");
  pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
  const buf = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: buf }).promise;
  let text = "";
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map(it => it.str).join(" ") + "\n";
  }
  return text;
}

function buildCloneData(p) {
  return {
    name: p.name || "Your Name",
    title: p.title || "Your Title",
    location: p.location || "",
    status: p.status || "",
    email: p.email || "",
    github: p.github || "",
    linkedin: p.linkedin || "",
    scholar: p.scholar || "",
    about: p.about || "",
    projects: Array.isArray(p.projects) ? p.projects.map(pr => ({ bullets: [], metrics: [], ...pr })) : [],
    experience: Array.isArray(p.experience) ? p.experience.map(e => ({ links: [], ...e })) : [],
    education: p.education && p.education.school ? p.education : { school: "", degree: "", date: "", gpa: "", honors: "", coursework: [] },
    skills: Array.isArray(p.skills) ? p.skills : []
  };
}

const CLONE_THEME_VARS = {
  green: { "--accent": "#4ade80", "--accent-dim": "#2f8f5b", "--accent-soft": "rgba(74, 222, 128, 0.12)" },
  amber: { "--accent": "#f3b13c", "--accent-dim": "#a87a22", "--accent-soft": "rgba(243, 177, 60, 0.12)" },
  blue: { "--accent": "#5fb3ff", "--accent-dim": "#2f6fa3", "--accent-soft": "rgba(95, 179, 255, 0.12)" }
};

async function runCloneMe() {
  if (!AI_WORKER_URL || AI_WORKER_URL.includes("YOUR-WORKER-SUBDOMAIN")) {
    printOutputHTML(`<div class="out"><p class="err">the AI backend isn't deployed yet.</p><p class="muted">set AI_WORKER_URL in script.js once the Cloudflare Worker is live.</p></div>`);
    scrollToBottom();
    return;
  }

  printOutputHTML(`<div class="out"><p class="accent">clone-me</p><p class="muted">upload your CV (PDF) and I'll ask a couple of quick questions, then generate your own version of this site.</p></div>`);
  scrollToBottom();

  const file = await triggerCvUpload();
  if (!file) {
    printOutputHTML(`<div class="out"><p class="muted">no file selected — canceled.</p></div>`);
    scrollToBottom();
    return;
  }

  printOutputHTML(`<div class="out"><p class="muted">reading ${escapeHtml(file.name)}…</p></div>`);
  scrollToBottom();

  let cvText;
  try {
    cvText = await extractPdfText(file);
  } catch (err) {
    printOutputHTML(`<div class="out"><p class="err">couldn't read that PDF — try a different export.</p></div>`);
    scrollToBottom();
    return;
  }

  if (!cvText.trim()) {
    printOutputHTML(`<div class="out"><p class="err">that PDF didn't have any extractable text (likely a scanned image). try a text-based PDF export.</p></div>`);
    scrollToBottom();
    return;
  }

  printOutputHTML(`<div class="out"><p class="muted">asking the AI to read your CV…</p></div>`);
  scrollToBottom();

  let data;
  try {
    const res = await fetch(AI_WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cvText: cvText.slice(0, 20000) })
    });
    if (!res.ok) throw new Error("bad response");
    data = await res.json();
  } catch (err) {
    printOutputHTML(`<div class="out"><p class="err">the AI backend didn't respond — try again in a bit.</p></div>`);
    scrollToBottom();
    return;
  }

  const profile = data.profile || {};
  const questions = Array.isArray(data.questions) ? data.questions.slice(0, 5) : [];
  let cloneTheme = "green";

  for (const q of questions) {
    if (!q || !q.prompt) continue;
    const answer = await askInTerminal(q.prompt);
    if (!answer || !answer.trim()) continue;
    if (q.field === "theme") {
      const t = answer.trim().toLowerCase();
      cloneTheme = ["green", "amber", "blue"].includes(t) ? t : "green";
    } else if (q.field) {
      profile[q.field] = answer.trim();
    }
  }

  printOutputHTML(`<div class="out"><p class="muted">generating your site…</p></div>`);
  scrollToBottom();

  renderClonePreview(buildCloneData(profile), cloneTheme);
}

function renderClonePreview(cloneData, cloneTheme) {
  const overlay = document.createElement("div");
  overlay.className = "clone-overlay";
  overlay.innerHTML = `
    <div class="clone-window">
      <div class="titlebar">
        <div class="dots"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>
        <div class="titlebar-title">${escapeHtml((cloneData.name || "you").toLowerCase().replace(/\s+/g, ""))}@portfolio: ~</div>
        <div class="titlebar-spacer" aria-hidden="true"></div>
      </div>
      <nav class="tabs clone-tabs">
        <button data-clone-cmd="about" class="active">about</button>
        <button data-clone-cmd="projects">projects</button>
        <button data-clone-cmd="experience">experience</button>
        <button data-clone-cmd="education">education</button>
        <button data-clone-cmd="skills">skills</button>
        <button data-clone-cmd="contact">contact</button>
      </nav>
      <main class="screen clone-screen"></main>
      <div class="clone-actions">
        <button class="btn" data-clone-action="download">⬇ download my site</button>
        <button class="btn" data-clone-action="close" style="background:transparent;color:var(--text-dim);border:1px solid var(--border);">close preview</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  const vars = CLONE_THEME_VARS[cloneTheme] || CLONE_THEME_VARS.green;
  Object.entries(vars).forEach(([k, v]) => overlay.style.setProperty(k, v));

  const cloneScreen = overlay.querySelector(".clone-screen");
  const renderers = { about: renderAbout, projects: renderProjects, experience: renderExperience, education: renderEducation, skills: renderSkills, contact: renderContact };

  function showClone(section) {
    overlay.querySelectorAll("[data-clone-cmd]").forEach(b => b.classList.toggle("active", b.dataset.cloneCmd === section));
    cloneScreen.innerHTML = renderers[section](cloneData);
  }
  overlay.querySelectorAll("[data-clone-cmd]").forEach(btn => {
    btn.addEventListener("click", () => showClone(btn.dataset.cloneCmd));
  });
  overlay.addEventListener("click", e => {
    const action = e.target.closest("[data-clone-action]");
    if (!action) return;
    if (action.dataset.cloneAction === "close") overlay.remove();
    if (action.dataset.cloneAction === "download") downloadCloneBundle(cloneData, cloneTheme);
  });
  showClone("about");

  printOutputHTML(`<div class="out"><p class="accent">done!</p><p class="muted">your preview opened above — click "download my site" to get the files, then push them to your own GitHub Pages repo the same way this one is hosted.</p></div>`);
  scrollToBottom();
}

async function downloadCloneBundle(cloneData, cloneTheme) {
  try {
    await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js");
  } catch (err) {
    alert("couldn't load the zip library — check your connection and try again.");
    return;
  }

  const [htmlSrc, cssSrc, jsSrc] = await Promise.all([
    fetch("index.html").then(r => r.text()),
    fetch("style.css").then(r => r.text()),
    fetch("script.js").then(r => r.text())
  ]);

  const newDataBlock = "/* DATA_START */\nconst DATA = " + JSON.stringify(cloneData, null, 2) + ";\n/* DATA_END */";
  let outJs = jsSrc.replace(/\/\* DATA_START \*\/[\s\S]*?\/\* DATA_END \*\//, newDataBlock);

  const newFeaturesBlock = `const FEATURES = ${JSON.stringify({ githubStats: true, hasResume: false, aiClone: false })};`;
  outJs = outJs.replace(/const FEATURES = \{[^}]*\};/, newFeaturesBlock);

  outJs += `\nsetTheme(${JSON.stringify(cloneTheme || "green")});\n`;

  const safeName = (cloneData.name || "my-portfolio").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "my-portfolio";
  const outHtml = htmlSrc
    .replace(/<title>.*<\/title>/, `<title>${escapeHtml(cloneData.name || "My")} — Portfolio</title>`)
    .replace(/sumaiya@portfolio/g, `${safeName}@portfolio`);

  const zip = new JSZip();
  zip.file("index.html", outHtml);
  zip.file("style.css", cssSrc);
  zip.file("script.js", outJs);
  const blob = await zip.generateAsync({ type: "blob" });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${safeName}-portfolio.zip`;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/* ---------- Boot sequence ---------- */

function typeLine(el, text, speed = 16) {
  return new Promise(resolve => {
    let i = 0;
    el.classList.add("typing");
    (function tick() {
      el.textContent = text.slice(0, i);
      i++;
      if (i <= text.length) {
        setTimeout(tick, speed);
      } else {
        el.classList.remove("typing");
        resolve();
      }
    })();
  });
}

async function typeBootLines(lines) {
  const wrap = document.createElement("div");
  wrap.className = "out";
  screen.appendChild(wrap);
  for (const line of lines) {
    const p = document.createElement("p");
    p.className = "muted";
    wrap.appendChild(p);
    await typeLine(p, line);
  }
}

async function boot() {
  const bootLines = [
    `Last login: ${new Date().toDateString()} on ttys001`,
    `Welcome to sumaiya@portfolio.`,
    `Type 'help' to see available commands, or click a tab above.`
  ];
  await typeBootLines(bootLines);
  runCommand("about", { silent: true });
  setActiveTab("about");
  input.focus();
}

boot();
