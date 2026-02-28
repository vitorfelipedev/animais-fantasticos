import outsideClick from './outsideclick.js';

export default class Dropdown {
  constructor(menus, events) {
    this.dropdownMenus = document.querySelectorAll(menus);
    this.activeDropdown = this.activeDropdown.bind(this);
    this.activeClass = 'active';
    this.events = ['touchstart', 'click'];
    this.events = events || ['touchstart', 'click'];
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addEventDropdown();
    }
    return this;
  }

  //adiciona os eventos ao dropdown menu
  addEventDropdown() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdown);
      });
    });
  }

  //Ativa o dropdown e adiciona a função que observa o clique fora dele
  activeDropdown(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }
}
