const btn = document.querySelector('#v2')

btn.onclick = () => {
  console.log('Has fet click al segon botó')
}

function crida() {
  console.log('Aaaaaaaah')
}

// No executo la funció, li passo aquesta perquè l'executi quan la necessiti!
// És com si li assignes la funció a una variable.
btn.onmouseenter = crida

const h1 = document.querySelector('h1')
document.querySelector('h1').onclick = () => alert('you clicked h1')

const btn3 = document.querySelector('#v3')
btn3.addEventListener('mouseup', () => alert('clicked!'))

// mouseup, mousedown

function fred() {
  console.log('Fred!')
}

function calor() {
  console.log('Calor!')
}

const focButton = document.querySelector('#foc')

// Només em permet emmagatzemar un sol event
focButton.onclick = fred
focButton.onclick = calor

// En canvi preferible...
// focButton.addEventListener('click', fred)
// focButton.addEventListener('click', calor)
