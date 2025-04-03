import AnimaNumeros from "./anima-numeros.js"; //Importar aqui, pois as vezes a animação ocorria antes dos números aparecerem(a função fetchAnimais);
export default function fetchAnimais(url, target) {
  //cria a div com informações com total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  //preench cada animal no dom
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  //anima os numeros de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]",".numeros","ativo");
    animaNumeros.init();
  }

  //puxa animais atraves de um arquivo json
  //e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      // fetch e espera resposta e transforma em json
      const animaisResponse = await fetch(url);
      //transforma resposta em json
      const animaisJSON = await animaisResponse.json();
      //apos transoformar em json ativa a animação
      animaisJSON.forEach((animal) => {
        preencherAnimais(animal);
      });
      animaAnimaisNumeros();

    } catch {
      console.log("Ocorreu um ERRO :(");
    }
  }

  return criarAnimais();
}
