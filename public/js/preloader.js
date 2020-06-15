const body = document.querySelector('body');
const loadingMask = document.querySelector('#loading-mask');

body.style.overflow = 'hidden';

document.addEventListener("DOMContentLoaded", function() {
    loadingMask.style.display = 'none';
    body.style.overflow = 'visible';
});