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
