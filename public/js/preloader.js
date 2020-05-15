const loadingMask = document.querySelector('#loading-mask');

loadingMask.style.display = 'block';
body.style.overflow = 'hidden';

document.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(() => {
    loadingMask.style.display = 'none';
    body.style.overflow = 'initial';
  }, 50);
});