export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(", ").map(Number); //Ao passar o split a string se torna Array, e passando o map(Number) retorna uma nova Array, porém com os valores em number
  const horarioSemana = funcionamento.dataset.horario.split(", ").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horaAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1; //se um elemento nao está na Array retorna-se -1;
  const horaAberto =
    horaAgora >= horarioSemana[0] && horaAgora < horarioSemana[1];

  if (semanaAberto && horaAberto) {
    funcionamento.classList.add("aberto");
  }
}

const agora = new Date();
const futuro = new Date("Dec 24 2025");

function transformarHoras(tempo) {
  return tempo / (24 * 60 * 60 * 1000); //transformando ms para dias
}

const diasAgora = transformarHoras(agora.getTime()); //ms de 1970 até agora
const diasFuturo = transformarHoras(futuro.getTime());

console.log(Math.floor(diasFuturo) - Math.floor(diasAgora));
