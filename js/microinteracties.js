var body = document.body
var lnkAddBundle = document.querySelector('article.toevoegen')
var lnkRemoveBundle = document.querySelector('article.toevoegen')

lnkAddBundle.addEventListener('click', addBundle)
lnkRemoveBundle.addEventListener('click', removeBundle)

function addBundle() {
  body.classList.add('add-bundle')
}

function removeBundle(e) {
  e.preventDefault()
  body.classList.remove('add-bundle')
}
