export default function initiScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    //primeira maneira:
    //window.scrollTo(0, topo);

    //window.scrollTo({
    //    top: topo,
    //    behavior: 'smooth',
    //});

    //terceira forma(mais simples):
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
