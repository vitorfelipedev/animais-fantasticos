import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.events = events || ['click', 'touchstart'];
    this.openMenu = this.openMenu.bind(this);
    this.activeClass = 'active';
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.toggle(this.activeClass);
    this.menuButton.classList.toggle(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addEventMenuMobile() {
    this.events.forEach((event) => {
      this.menuButton.addEventListener(event, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addEventMenuMobile();
    }
    return this;
  }
}
