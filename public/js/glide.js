const glide1 = document.querySelector('.glide1');

if (glide1) {
  const firstGlideBullet = document.querySelector('.glide__bullets').firstElementChild;

  new Glide(glide1, {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 0,
    animationDuration: 800,
  }).mount();


  if (firstGlideBullet) {
    // clicks slider button to center image
    document.addEventListener('DOMContentLoaded', function() {
      firstGlideBullet.click();
    });
  }
}

