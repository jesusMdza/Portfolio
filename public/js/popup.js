// mobile-nav-menu
function openMenu() {
    const popupMenu = document.querySelector('.popup-nav-menu');
    popupMenu.style.display = 'block';
}

function closeMenu() {
    const popupMenu = document.querySelector('.popup-nav-menu');
    popupMenu.style.display = 'none';
}


// Applies event listeners on divs nested in "projectLinks" container
// Gives SVG purple color when divs are hovered over
function toggleSVGFill() {
  const projectLinksDivs = document.querySelectorAll('.project-links div');

  projectLinksDivs.forEach(div => {

    const svg = div.firstElementChild;
    const span = svg.nextElementSibling;

    div.addEventListener('mouseover', (e) => {
      svg.style.fill = '#6A79FF';
      span.style.color = '#6A79FF';
    });

    div.addEventListener('mouseout', (e) => {
      svg.style.fill = 'initial';
      span.style.color = 'initial';
    });
  });
}

toggleSVGFill();