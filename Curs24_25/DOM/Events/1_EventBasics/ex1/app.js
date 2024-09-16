// Practiquem l'ús de addEventListener. Tens dos botons, cadascun amb un id: 'hello' i 'goodbye'. El teu objectiu és afegir un listener de clic a cada botó.

// Quan es faci clic al botó hello, hauries de fer console.log "hello"

// Quan es faci clic al botó goodbye, hauries de fer console.log "goodbye"

//var buttonHello = document.getElementById('hello')

const hello = () => {
  alert('hello')
}

document.getElementById('goodbye').addEventListener('click', myFunction)

// it's the same as

// var buttonGoodbye = document.getElementById('goodbye').onclick = function() {
//   alert('goodbye')
// }

// This one shows the onlclick not null when you inspect the button

function myFunction() {
  alert('goodbye')
}
