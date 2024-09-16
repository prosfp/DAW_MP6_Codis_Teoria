// Creeu exactament 100 nous elements de botó

const container = document.querySelector('#container')

// Cada botó ha de tenir algun text a dins (no importa quin)

// Cada botó ha de ser afegit dins el div contenidor.

for (let i = 0; i < 100; i++) {
  const button = document.createElement('button')
  button.innerText = 'Button'
  container.appendChild(button)
}
