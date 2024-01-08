// Creeu exactament 100 nous elements de botó
const div = document.querySelector('#container')
div.style.display = 'flex flex-wrap'
div.style.background = 'gray'

for (let i = 0; i < 100; i++) {
  const btn = document.createElement('button')
  btn.innerText = 'Btn'
  btn.style.border = 'solid'
  btn.style.padding = '10px'
  btn.style.margin = '10px'
  div.appendChild(btn)
}
// Cada botó ha de tenir algun text a dins (no importa quin)

// Cada botó ha de ser afegit dins el div contenidor.
