export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    //bind do this do objeto ao callback
    this.handleMutation = this.handleMutation.bind(this);
  }

  //recebe elemento do DOM , com número em seu texto
  //Incrementa de zero até o número final;
  static incrementarNumero(numero) {
    const total = +numero.innerText; //captando o valor de cada numero
    const incremento = Math.floor(total / 100); //so the numbers can update at the same time (relative number)
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random()); //cada vez vai ser uma ordem diferente dos numeros que vao completar primeiro.
  }

  animaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero);
    });
  }

  //função que ocorre com a mutação
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  //add a mutationObserver para verificar quando a classe ativo é adicionada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
