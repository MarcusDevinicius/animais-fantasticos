import initAnimaNumeros from "./anima-numeros.js"; //Importar aqui, pois as vezes a animação ocorria antes dos números aparecerem(a função fetchAnimais);
export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");
      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch {
      console.log("Ocorreu um ERRO :(");
    }
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  fetchAnimais("./animaisapi.json");
}
