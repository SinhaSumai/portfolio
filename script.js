/* =========================================================
   Content data — sourced from Sumaiya Sinha's CV.
   Edit the strings below to update the site; no other
   file needs to change.
   ========================================================= */

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

/* Feature flags — flip to false to pull a feature without touching
   anything else in the file. */
const FEATURES = {
  githubStats: true
};

/* =========================================================
   Rendering helpers
   ========================================================= */

function renderAbout() {
  return `
    <div class="out">
      <p style="color:var(--text);font-size:16px;font-weight:600;margin-bottom:2px;">${DATA.name}</p>
      <p class="muted" style="margin-bottom:10px;">${DATA.title}</p>
      <p class="muted">${DATA.location} · ${DATA.status}</p>
      <p style="margin-top:12px;white-space:pre-line;">${DATA.about}</p>
      <div class="links-row">
        <a href="${DATA.github}" target="_blank" rel="noopener">github.com/SinhaSumai</a>
        <a href="${DATA.linkedin}" target="_blank" rel="noopener">linkedin</a>
        <a href="${DATA.scholar}" target="_blank" rel="noopener">google scholar</a>
        <a href="mailto:${DATA.email}">${DATA.email}</a>
      </div>
      <p class="muted" style="margin-top:14px;">Type <span class="fileref" data-run="help">help</span> to see all commands, or <span class="fileref" data-run="projects">projects</span> to jump straight to the work.</p>
    </div>`;
}

function renderProjects() {
  const cards = DATA.projects.map(p => `
    <div class="card" data-card="${p.id}">
      <div class="card-title">${p.title}</div>
      <div class="card-tag">${p.tag}</div>
      <ul>${p.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
      ${p.metrics.length ? `<div class="metric-row">${p.metrics.map(m => `<span class="metric">${m}</span>`).join("")}</div>` : ""}
      ${p.note ? `<p class="muted" style="font-size:12px;margin-top:8px;">${p.note}</p>` : ""}
      ${p.cite ? `<div class="cite">${p.cite}</div>` : ""}
    </div>
  `).join("");
  return `<div class="out"><h2>Projects</h2><div class="project-grid">${cards}</div></div>`;
}

function renderExperience() {
  const items = DATA.experience.map(e => `
    <div class="tl-item">
      <div class="tl-date">${e.date}</div>
      <div class="tl-role">${e.role}</div>
      <div class="tl-org">${e.org}</div>
      <p class="tl-desc">${e.desc}</p>
      ${e.links.length ? e.links.map(id => `<span class="tl-link fileref" data-goto="${id}">view project →</span>`).join("  ") : ""}
    </div>
  `).join("");
  return `<div class="out"><h2>Experience &amp; Research</h2><div class="timeline">${items}</div></div>`;
}

function renderEducation() {
  const ed = DATA.education;
  return `
    <div class="out">
      <h2>Education</h2>
      <div class="edu-block">
        <div class="edu-degree">${ed.degree}</div>
        <div class="edu-meta">${ed.school} · ${ed.date} · ${ed.gpa}</div>
        <p class="muted">${ed.honors}</p>
        <div class="tag-list">${ed.coursework.map(c => `<span class="tag">${c}</span>`).join("")}</div>
      </div>
    </div>`;
}

function renderSkills() {
  const groups = DATA.skills.map(g => `
    <div class="skill-group">
      <div class="skill-group-label">${g.label}</div>
      <div class="chips">${g.items.map(i => `<span class="chip">${i}</span>`).join("")}</div>
    </div>
  `).join("");
  return `<div class="out"><h2>Skills</h2>${groups}</div>`;
}

function renderContact() {
  return `
    <div class="out">
      <h2>Contact</h2>
      <div class="contact-list">
        <div class="row"><span class="k">email</span><a href="mailto:${DATA.email}">${DATA.email}</a> <button class="btn" data-copy="${DATA.email}" style="margin-left:8px;">copy</button></div>
        <div class="row"><span class="k">github</span><a href="${DATA.github}" target="_blank" rel="noopener">${DATA.github.replace("https://", "")}</a></div>
        <div class="row"><span class="k">linkedin</span><a href="${DATA.linkedin}" target="_blank" rel="noopener">linkedin.com/in/sumaiya-sinha</a></div>
        <div class="row"><span class="k">scholar</span><a href="${DATA.scholar}" target="_blank" rel="noopener">google scholar</a></div>
        <div class="row"><span class="k">location</span><span class="muted">${DATA.location} · ${DATA.status}</span></div>
      </div>
    </div>`;
}

function renderHelp() {
  const rows = [
    ["about", "profile & quick facts"],
    ["projects", "selected engineering & research projects"],
    ["experience", "work & research timeline"],
    ["education", "degree, honors, coursework"],
    ["skills", "languages, frameworks, tools"],
    ["contact", "how to reach me"],
    ["resume", "download the pdf resume"],
    ["sysinfo", "neofetch-style system info"],
    ["theme <name>", "switch color theme: green / amber / blue"],
    ["matrix", "toggle the matrix rain (Esc to exit)"],
    ["ls", "list available sections"],
    ["whoami", "one-line bio"],
    ["clear", "clear the screen"],
    ["help", "show this message"]
  ];
  if (FEATURES.githubStats) rows.splice(7, 0, ["github", "live github stats"]);
  return `<div class="out"><h2>Available commands</h2><div class="help-table">${rows.map(([c, d]) => {
    const runnable = !c.includes(" ");
    return `<span class="cmd${runnable ? " fileref" : ""}"${runnable ? ` data-run="${c}"` : ""}>${c}</span><span class="desc">${d}</span>`;
  }).join("")}</div>
  <p class="muted" style="margin-top:12px;">Tip: the tabs above the prompt run the same commands — every plain command name above is clickable too. There may be a couple more commands not listed here.</p></div>`;
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
    ["os", "BengalByteOS (web)"],
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
  },
  resume: () => { downloadResume(); return `<div class="out"><p class="muted">Downloading resume.pdf…</p></div>`; },
  download: () => { downloadResume(); return `<div class="out"><p class="muted">Downloading resume.pdf…</p></div>`; },
  "download resume": () => { downloadResume(); return `<div class="out"><p class="muted">Downloading resume.pdf…</p></div>`; }
};

if (FEATURES.githubStats) {
  COMMANDS.github = () => {
    const loadingId = "gh-" + Date.now();
    loadGithubStats(loadingId);
    return `<div class="out" id="${loadingId}"><p class="muted">fetching live github stats…</p></div>`;
  };
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

async function loadGithubStats(targetId) {
  try {
    const res = await fetch("https://api.github.com/users/SinhaSumai");
    if (!res.ok) throw new Error("bad response");
    const user = await res.json();
    const reposRes = await fetch("https://api.github.com/users/SinhaSumai/repos?sort=updated&per_page=1");
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
