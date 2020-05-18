const glide1 = document.querySelector('.glide1');
const glideSlides = document.querySelector('.glide__slides');

if (glide1) {
  new Glide(glide1, {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    gap: 0,
    animationDuration: 800,
  }).mount();
}

// fixes issue with current slide not being centered upon viewing
function resetGliderWidth() {
  glideSlides.setAttribute('style', 'transition: transform 0ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s; width: 9444px; transform: translate3d(-1560px, 0px, 0px);');
}

if (glideSlides) {
  resetGliderWidth();
}