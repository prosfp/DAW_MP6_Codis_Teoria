const squareImages = document.getElementsByClassName('square')

/* for (let img of squareImages) {
  img.src =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}
 */
const allLinks = document.querySelectorAll('a')

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

for (let link of allLinks) {
  link.style.color = 'rgb(0, 108, 134)'
  link.style.textDecorationColor = 'magenta'
  link.style.textDecorationStyle = 'wavy'
}
