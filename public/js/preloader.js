const body = document.querySelector('body');
const loadingMask = document.querySelector('#loading-mask');

body.style.overflow = 'hidden';

document.addEventListener("DOMContentLoaded", () => {
    loadingMask.style.display = 'none';
    body.style.overflow = 'initial';
});