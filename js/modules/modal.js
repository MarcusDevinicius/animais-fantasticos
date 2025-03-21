export default function initModal() {
  const botaoAbrir = document.querySelector('a[href^="login"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const modalLogin = document.querySelector(".modal-container");

  if (botaoAbrir && botaoFechar && modalLogin) {
    function toggleModal(event) {
      event.preventDefault();
      modalLogin.classList.toggle("ativo");
    }

    function clickForaModal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    modalLogin.addEventListener("click", clickForaModal);
  }
}
