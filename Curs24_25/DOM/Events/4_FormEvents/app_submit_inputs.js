const form = document.querySelector('#myForm')
const input = document.querySelector('#nomGos')
const list = document.querySelector('#gossos')
//Anem a mirar d'obtenir les dades del form
//Comencem fer un console.log de l'input.value

form.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log(input.value)
  //Cada cop que fem un submit,
  // 1- Creem un nou LI per la llista de gossos:
  // 2- Injectem en aquest li el nom del gos
  // 3-
  const catName = input.value
  const newLi = document.createElement('li')
  console.log(newLi)
  newLi.innerText = catName
  console.log(newLi)
  list.append(newLi)
  //list.appendChild(newLi)
  //Fem que desaparegui l'input un cop introduït
  input.value = ''
})
