import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(btnMenu, menuMobile, events) {
    this.btnMenu = document.querySelector(btnMenu);
    this.menuMobile = document.querySelector(menuMobile);
    this.activeClass = "ativo";

    this.openMenu = this.openMenu.bind(this);

    if (events === undefined) {
      this.events = ["click", "touchstart"];
    } else {
      this.events = events;
    }
  }

  openMenu() {
    this.menuMobile.classList.add(this.activeClass);
    this.btnMenu.classList.add(this.activeClass);
    outsideClick(this.menuMobile, this.events, () => {
      this.menuMobile.classList.remove(this.activeClass);
      this.btnMenu.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) => {
      this.btnMenu.addEventListener(evento, this.openMenu); //faz o botao de menu ter esses eventos para abrir e fechar
    });
  }

  init() {
    if (this.btnMenu && this.menuMobile) {
      this.addMenuMobileEvents();
    }

    return this;
  }
}
