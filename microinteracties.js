//Microinteractie bundel verwijderen
var button_verwijder = document.querySelector('article a')
//console.log("Button Verwijderen? " + button_verwijder);

button_verwijder.addEventListener('click', showError);

function showError() {
  console.log("FUNCTION SHOWERROR()");
  document.body.classList.toggle('showError');
}

//Microinteractie bundel offline bewaren

var toggleButton = document.querySelector('div.toggle');

toggleButton.addEventListener('click', showLoading);

function showLoading() {
  document.body.classList.toggle('showLoading');
}
