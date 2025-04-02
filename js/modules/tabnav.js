export default class TabNav {
  constructor(tabMenu, tabContent) {
    this.tabMenu = document.querySelectorAll(tabMenu);
    this.tabContent = document.querySelectorAll(tabContent);
    this.activClass = "ativo";
  }
  //ativa a tab de acordo com o idex dela
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activClass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activClass, direcao);
  }

  addTabNavEvent() {
    this.tabMenu.forEach((li, index) => {
      li.addEventListener("click", () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      //ativar primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}
