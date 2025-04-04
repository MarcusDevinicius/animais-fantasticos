import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    //define events padrao caso o usuario nao defina
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
    this.activeClass = 'ativo';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  //add eventos ao dropdownMenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  //ativa o dropdownMenu e add
  //a função que observa o click fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.toggle(this.activeClass);
    outsideClick(element, this.events, () => {
      //callBack
      element.classList.remove(this.activeClass);
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }

  //element = this
}
