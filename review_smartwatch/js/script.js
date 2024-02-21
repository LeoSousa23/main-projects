const firstScreen = document.querySelector('#first-screen')
const secondScreen = document.querySelector('#second-screen')
const btnContinue = document.querySelector('#btn-continue')
const btnToGoBack = document.querySelector('#togoback')

function toggleScreen() {
  firstScreen.classList.toggle('hide')
  secondScreen.classList.toggle('hide')
}

function handleClick() {
  toggleScreen()
}

function returnToHome() {
  toggleScreen()
}

// pegando os eventos de click nos botoes
btnContinue.addEventListener('click', handleClick)
btnToGoBack.addEventListener('click', returnToHome)