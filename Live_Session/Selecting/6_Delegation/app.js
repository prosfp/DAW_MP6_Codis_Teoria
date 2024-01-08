//Quan tenim molts elements que necessiten el mateix event, podem utilitzar
//event delegation per a evitar afegir l'event a cada element.

document.getElementById('myList').addEventListener('click', myFunction)

function myFunction(event) {
  console.dir(event.target.innerText)
}
