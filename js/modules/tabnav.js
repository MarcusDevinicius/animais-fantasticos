export default class TabNav {
  constructor(tabMenu, tabContent) {
    this.tabMenu = tabMenu;
    this.tabContent = tabContent;
    this.activClass = 'ativo';
  }
  // const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  // const tabContent = document.querySelectorAll('[data-tab="content"] section');
  tabNavInit() {
    if (tabMenu.length && tabContent.length) {
      tabContent[0].classList.add(this.activClass);
      this.tabMenu.forEach((li, index) => {
        li.addEventListener("click", () => {
          this.activeTab(index);
        });
      });
    }
  }
  activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove(this.activClass);
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add(this.activClass, direcao);
  }
}
// if (tabMenu.length && tabContent.length) {
//   tabContent[0].classList.add("ativo");

//   // tabMenu.forEach((li, index) => {
//   //   li.addEventListener("click", () => {
//   //     activeTab(index);
//   //   });
//   // });
// }
