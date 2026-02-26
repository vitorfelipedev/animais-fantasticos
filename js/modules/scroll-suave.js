export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]',
  );
  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);
    /*  window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      }); */
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  if (linksInternos.length) {
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
}
