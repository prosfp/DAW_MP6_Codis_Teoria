const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return `rgb(${r}, ${g}, ${b})`
}

const buttons = document.querySelectorAll('button')

// for (let button of buttons) {
//   button.addEventListener('click', () => {
//     button.style.backgroundColor = makeRandColor()
//   })
// }

//Amb this
for (let button of buttons) {
  button.addEventListener('click', colorejar)
}

// Però si vull reutilitzar la funció de donar color?
// Per h1 suposem:
const h1s = document.querySelectorAll('h1')

// Aquí puc canviar el background pel text:
// for (let h1 of h1s) {
//   h1.addEventListener('click', () => {
//     h1.style.color = makeRandColor()
//     // same as --> this.style.color
//   })
// }

// Amb "this"
for (let h1 of h1s) {
  h1.addEventListener('click', colorejar)
}

// this em pot simplificar la vida.
// this referencia a l'element des d'on s'ha cridat
function colorejar() {
  this.style.backgroundColor = makeRandColor()
  this.style.color = makeRandColor()
}
