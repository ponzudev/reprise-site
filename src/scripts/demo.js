// 無音の説明用モック。音声・マイクは使わず、解析から声に出すまでの 5 段階を視覚化する。
const device = document.querySelector(".demo-device");
const sentences = [...document.querySelectorAll(".sentence")];
const stageButtons = [...document.querySelectorAll("[data-stage]")];
const play = document.querySelector("#play");
const status = document.querySelector("#status");
const progress = document.querySelector("#progress");
const progressBar = document.querySelector(".progress-track");
// 最初の 2 段階（解析・分割）はトラック全体で 1 回だけ、残りの 3 段階は文ごとに繰り返す。
const stages = [
  { id: "analyze", title: "音声を解析中", symbol: "≋", description: "文字起こしは、この iPhone の中で。", duration: 2800, meta: "0:09 · 解析中" },
  { id: "split", title: "文ごとに分かれました", symbol: "3 文", description: "文の切れ目で区切り、本文が付きます。", duration: 2800, meta: "0:09 · 3 文" },
  { id: "listen", title: "お手本を聞く", symbol: "♪", description: "まずは、一文を最後まで。", duration: 3000, meta: "0:09 · 3 文" },
  { id: "cue", title: "ここから、あなたの番", symbol: "ピッ", description: "アプリでは短い合図音が鳴ります。", duration: 1400, meta: "0:09 · 3 文" },
  { id: "speak", title: "聞いた文を、声に出す", symbol: "あなたの番", description: "まねる時間のあと、次の一文へ。", duration: 3600, meta: "0:09 · 3 文" },
];
const firstSentenceStage = stages.findIndex(stage => stage.id === "listen");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
let current = 0;
let stageIndex = 0;
let elapsed = 0;
let playing = false;
let finished = false;
let visible = false;
let hasStarted = false;
let frame = null;
let lastTime = null;

function render() {
  const stage = stages[stageIndex];
  device.dataset.phase = stage.id;
  device.dataset.active = String(current);
  device.style.setProperty("--scan", "0%");
  document.querySelector("#track-meta").textContent = stage.meta;
  device.dataset.playing = String(playing);
  sentences.forEach((button, index) => {
    const active = stageIndex >= firstSentenceStage && index === current;
    button.classList.toggle("active", active);
    button.setAttribute("aria-current", String(active));
  });
  stageButtons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.stage === stage.id)));
  document.querySelector("#phase-symbol").textContent = stage.symbol;
  document.querySelector("#phase-title").textContent = stage.title;
  document.querySelector("#phase-description").textContent = stage.description;
  play.textContent = finished ? "もう一度" : playing ? "一時停止" : "流れを見る";
  play.setAttribute("aria-label", finished ? "デモをもう一度見る" : playing ? "デモを一時停止" : "デモを開始");
  const where = stageIndex >= firstSentenceStage ? `${current + 1} 文目 · ` : "";
  status.textContent = finished ? "流れを見終わりました · 音は出ません" : `${where}${stage.title}${playing ? "" : "（停止中）"}`;
  updateProgress();
}
function updateProgress() {
  const percent = Math.min(100, elapsed / stages[stageIndex].duration * 100);
  progress.style.width = `${percent}%`;
  device.style.setProperty("--scan", `${percent}%`);
  progressBar.setAttribute("aria-valuenow", String(Math.round(percent)));
  progressBar.setAttribute("aria-valuetext", `${stages[stageIndex].title} ${Math.round(percent)}%`);
}
function syncFrames() {
  if (frame !== null) cancelAnimationFrame(frame);
  frame = null;
  lastTime = null;
  if (playing && visible && !document.hidden) frame = requestAnimationFrame(tick);
}
function tick(time) {
  frame = null;
  if (!playing || !visible || document.hidden) return;
  if (lastTime !== null) elapsed += time - lastTime;
  lastTime = time;
  if (elapsed >= stages[stageIndex].duration) {
    if (stageIndex === stages.length - 1 && current === sentences.length - 1) {
      elapsed = stages[stageIndex].duration;
      finished = true;
      playing = false;
    } else {
      elapsed = 0;
      stageIndex++;
      if (stageIndex === stages.length) { stageIndex = firstSentenceStage; current++; }
    }
    render();
  } else updateProgress();
  if (playing) frame = requestAnimationFrame(tick);
}
function selectSentence(index, fromAnalysis = false) {
  current = index;
  stageIndex = fromAnalysis ? 0 : firstSentenceStage;
  elapsed = 0;
  finished = false;
  hasStarted = true;
  playing = !reducedMotion.matches;
  render();
  syncFrames();
}
sentences.forEach((button, index) => button.addEventListener("click", () => selectSentence(index)));
stageButtons.forEach(button => button.addEventListener("click", () => {
  stageIndex = stages.findIndex(stage => stage.id === button.dataset.stage);
  if (stageIndex < firstSentenceStage) current = 0;
  elapsed = 0;
  playing = false;
  finished = false;
  hasStarted = true;
  render();
  syncFrames();
}));
play.addEventListener("click", () => {
  if (finished) { current = 0; stageIndex = 0; elapsed = 0; finished = false; }
  playing = !playing;
  hasStarted = true;
  render();
  syncFrames();
});
document.querySelector("#restart").addEventListener("click", () => selectSentence(0, true));
document.querySelector("#previous").addEventListener("click", () => selectSentence((current + sentences.length - 1) % sentences.length));
document.querySelector("#next").addEventListener("click", () => selectSentence((current + 1) % sentences.length));
if ("IntersectionObserver" in window) {
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible && !hasStarted && !reducedMotion.matches) {
      hasStarted = true;
      playing = true;
      render();
    }
    syncFrames();
  }, { threshold: 0.25 }).observe(device);
} else visible = true;
document.addEventListener("visibilitychange", syncFrames);
window.addEventListener("pagehide", () => { playing = false; syncFrames(); });
reducedMotion.addEventListener("change", () => {
  if (reducedMotion.matches) { playing = false; render(); syncFrames(); }
});
render();

// スマホの固定ボタンは、最初の画面のボタンが見えなくなってから出す（最初の画面を隠さないため）。
const mobileCta = document.querySelector(".mobile-cta");
const heroActions = document.querySelector(".hero-actions");
if (mobileCta && heroActions && "IntersectionObserver" in window) {
  new IntersectionObserver(([entry]) => {
    mobileCta.classList.toggle("visible", !entry.isIntersecting && entry.boundingClientRect.top < 0);
  }).observe(heroActions);
} else if (mobileCta) {
  mobileCta.classList.add("visible");
}
