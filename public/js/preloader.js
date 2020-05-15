const loadingMask = document.querySelector('#loading-mask');

loadingMask.style.display = 'block';
body.style.overflow = 'hidden';

document.addEventListener("DOMContentLoaded", () => {
  loadingMask.style.display = 'none';
  body.style.overflow = 'initial';
});