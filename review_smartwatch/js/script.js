const firstScreen = document.querySelector('#first-screen')
const secondScreen = document.querySelector('#second-screen')
const modal = document.querySelector('#modal-wrapper')
const btnContinue = document.querySelector('#btn-continue')
const btnToGoBack = document.querySelector('#togoback')
const btnSend = document.querySelector('#btn-send')
const btnCloseModal = document.querySelector('#close')

function toggleScreen() {
  firstScreen.classList.toggle('hide')
  secondScreen.classList.toggle('hide')
}

function handleClick() {
  toggleScreen()
}

function openModal() {
  modal.classList.add('open')
}

function closeModal() {
  modal.classList.remove('open')
  window.location.reload()
}

// pegando os eventos de click nos botoes
btnContinue.addEventListener('click', handleClick)
btnToGoBack.addEventListener('click', handleClick)
btnSend.addEventListener('click', openModal)
btnCloseModal.addEventListener('click', closeModal)