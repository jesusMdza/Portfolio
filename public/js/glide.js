const glide1 = document.querySelector('.glide1');
const firstGlideBullet = document.querySelector('.glide__bullets').firstElementChild;

if (glide1) {
  new Glide(glide1, {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 0,
    animationDuration: 800,
  }).mount();
}

// clicks slider button to center image
document.addEventListener('DOMContentLoaded', () => {
  if (firstGlideBullet) {
    firstGlideBullet.click();
  }
});
