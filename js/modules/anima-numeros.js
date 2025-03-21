export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
      const total = +numero.innerText; //captando o valor de cada numero
      const incremento = total / 100; //so the numbers can update at the same time (relative number)

      let start = 0;
      const timer = setInterval(() => {
        start = +incremento;
        numero.innerText = start.toFixed();
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random()); //cada vez vai ser uma ordem diferente dos numeros que vao completar primeiro.
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }
  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
