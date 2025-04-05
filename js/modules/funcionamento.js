export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(", ").map(Number); //Ao passar o split a string se torna Array, e passando o map(Number) retorna uma nova Array, porém com os valores em number
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(", ")
      .map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = dataAgora.getDay();
    this.horaAgora = dataAgora.getUTCHours() - 3; //horario universal(- 3 por que é o calculo em relação ao Brasil)
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(diaAgora) !== -1; //se um elemento nao está na Array retorna-se -1;
    const horaAberto =
      this.horaAgora >= horarioSemana[0] &&
      this.horaAgora < this.horarioSemana[1];

    return semanaAberto && horaAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.ativaAberto();
      this.dadosFuncionamento();
      this.dadosAgora();
    }
    return this;
  }
}
