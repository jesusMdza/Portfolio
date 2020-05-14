const glide1 = document.querySelector('.glide1');

if (glide1) {
  new Glide(glide1, {
    type: 'carousel',
    perView: 1,
    gap: 0,
    animationDuration: 800,
  }).mount();
}