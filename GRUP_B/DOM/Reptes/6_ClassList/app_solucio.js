// A index.html, trobaràs 6 elements <li>, dos dels quals tenen la classe
// 'highlight' aplicada.

// Utilitza JavaScript i la propietat classList per invertir quins
// elements tenen la classe destacada.

// Bàsicament, itera sobre tots els elements <li> i alterna la classe
// 'highlight' a cadascun.

const button = document.querySelector('button')
button.addEventListener('click', () => {
  //Pots fer servir aquest "eventListener" per alternar la classe "highlight" a
  //tots els elements <li> de la llista. El codi que posis aquí s'executarà
  //quan es faci clic al botó.
  const elements = document.querySelectorAll('li')
  elements.forEach(element => {
    element.classList.toggle('highlight')
  })
})
