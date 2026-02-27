export default class AnimacaoScroll {
  constructor(section) {
    this.sections = document.querySelectorAll(section);
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistance = this.checkDistance.bind(this);
  }

  //Obtém a distância de cada item em relação ao topo
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  //Verifica distacia do objeto ao Scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }

  addEventAnimacaoScroll() {
    window.addEventListener('scroll', this.checkDistance);
  }

  addEventResize() {
    window.addEventListener('resize', () => {
      this.windowMetade = window.innerHeight * 0.6;
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      this.addEventAnimacaoScroll();
      this.addEventResize();
    }
    return this;
  }

  //Remove o Event de Scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
