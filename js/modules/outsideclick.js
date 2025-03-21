export default function outsideClick(element, events, callBack) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    //Se o elemento nao tem o atributo,
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, hadleOutsideClick)); //Tem a ver com o bubble, faz com que essa função funcione no menu mobile.
    });
    element.setAttribute(outside, "");
  }
  function hadleOutsideClick(event) {
    if (!element.contains(event.target)) {
      //Se o event.target não for no element...
      //Remoção do Evento de click no HTML para dps que o Menu for fechado o evento nao ficar aativando.
      element.removeAttribute(outside, "");
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, hadleOutsideClick);
      });
      callBack();
    }
  }
}
