// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container')
const baseURL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

// Hi ha un "fotimé" de Pokemons (>1000)... mostra els 200 o 300 primers... it's enough! ;)

for (let i = 1; i <= 1300; i++) {
  const pokemon = document.createElement('div')
  pokemon.classList.add('pokemon')
  const label = document.createElement('span')
  label.innerText = `#${i}`
  const newImg = document.createElement('img')
  newImg.src = `${baseURL}${i}.png`

  pokemon.appendChild(newImg)
  pokemon.appendChild(label)
  container.appendChild(pokemon)
}
