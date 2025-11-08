// small scripts: set year and simple interactive touches
document.addEventListener('DOMContentLoaded', () => {
  const y = new Date().getFullYear();
  document.getElementById('year')?.textContent = y;

  // tiny accessibility improvement: add focus outlines for keyboard users
  document.body.addEventListener('keyup', (e) => {
    if (e.key === "Tab") document.documentElement.classList.add('show-focus');
  }, { once: true });
});
