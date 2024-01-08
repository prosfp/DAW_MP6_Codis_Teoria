const form = document.querySelector('#myForm')
const input = document.querySelector('#nomGos')
const list = document.querySelector('#gossos')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  // Cada cop que hi hagi un submit
  // 1- Creo un nou LI per la llista
  // 2- Injecto aquest Li
  const nomGos = input.value
  const newLI = document.createElement('li')
  newLI.innerText = nomGos
  console.log(newLI)
  list.appendChild(newLI)
  input.value = ''
})
