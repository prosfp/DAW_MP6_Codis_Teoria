// - Clicar un botó
// - Moure el ratolí
// - Fer scroll
// - Escriure a un input
// - ...

const btn = document.querySelector('#v2')

btn.onclick = () => {
  console.log('Has fet click al segon botó')
}

function crida() {
  console.log('Aaaaaaaaaah')
}

//onmouseenter
btn.onmouseenter = crida

const h1 = document.querySelector('h1')

h1.onclick = () => alert('has clicat h1')

//onmouseup
const btn3 = document.querySelector('#v3')
btn3.addEventListener('mouseup', () => alert('clicked!'))

function fred() {
  console.log('Fred!')
}

function calor() {
  console.log('Calor!')
}

const focButton = document.querySelector('#foc')

// focButton.onclick = fred
// focButton.onclick = calor
//Preferible
focButton.addEventListener('click', fred)
focButton.addEventListener('click', calor)

// Per què el vodria utilitzar?

// - Perquè puc afegir tants events com vulgui a un element
// - Perquè puc afegir un event a un element que encara no existeix (per exemple, si el creo amb JavaScript)

// https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
