import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const btnMenu = document.querySelector('[data-menu="button"]');
  const menuMobile = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  if (btnMenu) {
    function openMenu() {
      menuMobile.classList.add("ativo");
      btnMenu.classList.add("ativo");
      outsideClick(menuMobile, eventos, () => {
        menuMobile.classList.remove("ativo");
        btnMenu.classList.remove("ativo");
      });
    }

    eventos.forEach((evento) => {
      btnMenu.addEventListener(evento, openMenu); //faz o botao de menu ter esses eventos para abrir e fechar
    });
  }
}
