// A index.html, trobaràs 6 elements <li>, dos dels quals tenen la classe
// 'highlight' aplicada.

// Utilitza JavaScript i la propietat classList per invertir quins
// elements tenen la classe destacada.

// Bàsicament, itera sobre tots els elements <li> i alterna la classe
// 'highlight' a cadascun.

const button = document.querySelector('button')
button.addEventListener('click', () => {
  const lis = document.querySelectorAll('li')
  lis.forEach(item => {
    item.classList.toggle('highlight')
  })
})
