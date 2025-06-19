// Проста анімація завантаження
window.addEventListener("load", () => {
  document.querySelectorAll("section").forEach(sec => {
    sec.style.opacity = "1";
  });
});
