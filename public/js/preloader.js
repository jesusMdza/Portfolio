const body = document.querySelector('body');
const loadingMask = document.querySelector('#loading-mask');

loadingMask.style.display = 'block';
body.style.overflow = 'hidden';

document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(() => {
      console.log(document.readyState);
      loadingMask.style.display = 'none';
      body.style.overflow = 'initial';
    }, 300);
});