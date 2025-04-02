export default class Modal {
  constructor(botaoAbrir, botaoFechar, modalLogin) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.modalLogin = document.querySelector(modalLogin);

    // bind this ao callback para fazer
    //referencia ao objeto da classe
    //nos metodos callback
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickForaModal = this.clickForaModal.bind(this);

  }

  // bind this ao callback para fazer
  //referencia ao objeto da classe

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.modalLogin) {
      this.addModalEvents();
    }
    return this;
  }

  addModalEvents() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.modalLogin.addEventListener("click", this.clickForaModal);
  }
  //abre ou fecha o modal
  toggleModal() {
    this.modalLogin.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  //fecha o modal ao clicar do lado de fora
  clickForaModal(event) {
    if (event.target === this.modalLogin) {
      this.toggleModal(event);
    }
  }
}
