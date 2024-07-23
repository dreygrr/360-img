// script.js
export const addButtonClickEvents = () => {
  const buttons = document.querySelectorAll('.scheduling .options button');
  const forms = document.querySelectorAll('.scheduling .forms .form');

  buttons.forEach(button => {
    button.onclick = () => {
      //removendo anteriores
      buttons.forEach(btn => {btn.className = "";});
      forms.forEach(form => {form.classList.remove("selected");});

      //selecionando novo do clique
      button.className = "selected";
      forms[elementIndex(button) - 1].classList.add("selected");
    };
  });
};



function elementIndex(el) {
  if (!el) return -1;
  var i = 0;
  do {
      i++;
  } while (el = el.previousElementSibling);
  return i;
}
