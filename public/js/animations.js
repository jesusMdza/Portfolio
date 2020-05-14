/************************ ANIMEJS ANIMATIONS ***************************/

/*** NAV ANIMATIONS ***/
const body = document.querySelector('body');
const navContainer = document.querySelector('.nav-container');
const popupNavMenu = document.querySelector('.popup-nav-menu');
const logo = document.querySelector('.logo');
const firstLink = document.querySelector('.popup-nav-menu .container').firstElementChild;
const secondLink = document.querySelector('.popup-nav-menu .container').lastElementChild;
const hamburger = document.querySelector('.hamburger');
const firstBar = document.querySelector('.hamburger svg').firstElementChild.nextSibling;
const middleBar = document.querySelector('.hamburger svg').firstElementChild;
const lastBar = document.querySelector('.hamburger svg').lastElementChild;
let menuOpen = false;

anime({
  targets: [firstLink, secondLink],
  keyframes: [
    {opacity: 0},
    {translateX: "-10%"}
  ],
  easing: 'cubicBezier(.32,.4,0,.96)',
  delay: 400
});

anime({
  targets: popupNavMenu,
  keyframes: [
    {translateX: "-100%"},
    {opacity: 1}
  ],
  easing: 'cubicBezier(.32,.4,0,.96)',
});

hamburger.addEventListener('click', () => {
  if (!menuOpen && popupNavMenu.getAttribute('style').includes('transform: translateX(-100%);') && secondLink.getAttribute('style').includes('transform: translateX(-10%)')) {
    // console.log(popupNavMenu.getAttribute('style').includes('transform: translateX(-100%);'));
    // console.log(firstLink.getAttribute('style').includes('transform: translateX(-10%)'));
    hamburger.classList.add('open');
    menuOpen = true;
    body.style.overflow = 'hidden';
    scrollToTop();
    openMenu();
  } else if (menuOpen && popupNavMenu.getAttribute('style').includes('transform: translateX(0%);') && secondLink.getAttribute('style').includes('transform: translateX(0%)')) {
    // console.log(popupNavMenu.getAttribute('style').includes('transform: translateX(0%);'));
    hamburger.classList.remove('open');
    menuOpen = false;
    body.style.overflow = 'initial';
    closeMenu();
  }
});

function openMenu() {
  // logo
  anime({
    targets: logo.firstElementChild.firstElementChild.firstElementChild,
    keyframes: [
      {fill: '#FFF'}
    ],
    easing: 'cubicBezier(.32,.4,0,.96)',
    duration: 400
  });

  anime({
    targets: logo.firstElementChild.firstElementChild.lastElementChild,
    keyframes: [
      {fill: '#3A36FF'}
    ],
    easing: 'cubicBezier(.32,.4,0,.96)',
    duration: 400
  });
  
  // hamburger bar animations
  anime({
    targets: firstBar,
    keyframes: [
      {translateY: '43%'},
      {fill: '#3A36FF'}
    ],
    easing: 'cubicBezier(.32,.4,0,.96)',
    duration: 400
  });

  anime({
    targets: middleBar,
    keyframes: [
      {fill: '#FFF'}
    ],
    easing: 'cubicBezier(.32,.4,0,.96)',
    duration: 400
  });

  anime({
    targets: lastBar,
    keyframes: [
      {translateY: '-43%'},
      {fill: '#3A36FF'}
    ],
    easing: 'cubicBezier(.32,.4,0,.96)',
    duration: 400
  });

  // menu
  anime({
    targets: popupNavMenu,
    keyframes: [
      {opacity: 1, translateX: "0%"},
    ],
    easing: 'cubicBezier(.32,.4,0,.96)',
    duration: 400
  });

  // menu links
  anime({
    targets: [firstLink],
    keyframes: [
      {opacity: 1, translateX: "0%"}
    ],
    easing: 'cubicBezier(.32,.4,0,.96)',
    duration: 250,
    delay: 450
  });

  anime({
    targets: [secondLink],
    keyframes: [
      {opacity: 1, translateX: "0%"}
    ],
    easing: 'cubicBezier(.32,.4,0,.96)',
    duration: 250,
    delay: 600
  });

  // hamburger bar animations
  anime({
    targets: firstBar,
    keyframes: [
      {translateY: '43%'},
      {fill: '#FFF'}
    ],
    easing: 'cubicBezier(.32,.4,0,.96)',
    duration: 400
  });

  anime({
    targets: middleBar,
    keyframes: [
      {translateY: '0%'},
      {fill: '#FFF'}
    ],
    easing: 'cubicBezier(.32,.4,0,.96)',
    duration: 400
  });

  anime({
    targets: lastBar,
    keyframes: [
      {translateY: '-43%'},
      {fill: '#FFF'}
    ],
    easing: 'cubicBezier(.32,.4,0,.96)',
    duration: 400
  });
}

function closeMenu() {
  // logo
  anime({
    targets: logo.firstElementChild.firstElementChild.firstElementChild,
    keyframes: [
      {fill: '#3A36FF'}
    ],
    easing: 'cubicBezier(.32,.4,0,.96)',
    duration: 400
  });

  anime({
    targets: logo.firstElementChild.firstElementChild.lastElementChild,
    keyframes: [
      {fill: '#FFF'}
    ],
    easing: 'cubicBezier(.32,.4,0,.96)',
    duration: 400
  });

  anime({
    targets: popupNavMenu,
    keyframes: [
      {translateX: "-100%"},
    ],
    easing: 'cubicBezier(.32,.4,0,.96)',
    duration: 400
  });

  // hamburger bar animations
  anime({
    targets: firstBar,
    keyframes: [
      {fill: '#3A36FF'},
      {translateY: '0%'}
    ],
    easing: 'cubicBezier(.32,.4,0,.96)',
    duration: 400
  });

  anime({
    targets: middleBar,
    keyframes: [
      {fill: '#3A36FF'},
      {translateY: '0%'}
    ],
    easing: 'cubicBezier(.32,.4,0,.96)',
    duration: 400
  });

  anime({
    targets: lastBar,
    keyframes: [
      {fill: '#3A36FF'},
      {translateY: '0%'}
    ],
    easing: 'cubicBezier(.32,.4,0,.96)',
    duration: 400
  });

  // menu links
  anime({
    targets: [firstLink],
    keyframes: [
      {opacity: 0, translateX: "-10%"},
    ],
    easing: 'cubicBezier(.32,.4,0,.96)',
    duration: 400,
    delay: 20
  });

  anime({
    targets: [secondLink],
    keyframes: [
      {opacity: 0, translateX: "-10%"},
    ],
    easing: 'cubicBezier(.32,.4,0,.96)',
    duration: 400,
    delay: 200
  });
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrollToProjects() {
  document.querySelector('.proj-details .secondary').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/************************ AOS ANIMATIONS ***************************/
AOS.init();

// project animations odd and even
function loadFirstButton() {
  const allProjects = document.querySelector('.container.projects.work .indx-proj-container');

  if (allProjects) {
    const firstButton = allProjects.lastElementChild.lastElementChild.firstElementChild;
    firstButton.setAttribute('data-aos', 'fade-left');
    firstButton.setAttribute('data-aos-duration', '800');
    firstButton.setAttribute('data-aos-anchor', '.wrapper');
    firstButton.setAttribute('data-aos-anchor-placement', 'top-bottom');
    firstButton.classList.add('aos-init', 'aos-animate');
  }
}

loadFirstButton();