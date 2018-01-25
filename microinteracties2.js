//Microinteractie bundel toevoegen

console.log("joepieieiei ");


var button_toevoegen = document.querySelector('article .add');
button_toevoegen.addEventListener('click', toggleBundle);

function toggleBundle() {
  document.body.classList.toggle('toggle-bundle');
}
