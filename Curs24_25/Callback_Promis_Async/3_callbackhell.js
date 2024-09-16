//1 -   document.body.style.backgroundColor = 'red'
// Com puc fer perquè es vagi canviant el fons cada segon?

// setTimeout(() => {
//   document.body.style.backgroundColor = 'red'
// }, 1000)

// setTimeout(() => {
//   document.body.style.backgroundColor = 'orange'
// }, 2000)

// setTimeout(() => {
//   document.body.style.backgroundColor = 'purple'
// }, 3000)

// setTimeout(() => {
//   document.body.style.backgroundColor = 'yello'
// }, 4000)

// setTimeout(() => {
//   document.body.style.backgroundColor = 'blue'
// }, 5000)

// 2. Com podria fer això de manera una mica més elegant?

// setTimeout(() => {
//   document.body.style.backgroundColor = 'red'
//   setTimeout(() => {
//     document.body.style.backgroundColor = 'orange'
//     setTimeout(() => {
//       document.body.style.backgroundColor = 'purple'
//       setTimeout(() => {
//         document.body.style.backgroundColor = 'yellow'
//         setTimeout(() => {
//           document.body.style.backgroundColor = 'blue'
//         }, 1000)
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000)

// 3. O ho puc plantejar d'alguna altra manera:
// I si fem una funció que em permeti canviar el color del fons i que em permeti passar-li el color i el delay?

// const canviColors = (nouColor, delay) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = nouColor
//   }, delay)
// }

// canviColors('red', 1000)
// canviColors('orange', 2000)
// canviColors('yellow', 3000)

// 4. I si afegeixo una funció de callback a la funcio?

const canviColors2 = (nouColor, delay, callback) => {
  setTimeout(() => {
    document.body.style.backgroundColor = nouColor
    callback()
  }, delay)
}

canviColors2('red', 1000, () => {
  console.log('Soc dins la Callback')
  canviColors2('orange', 1000, () => {
    canviColors2('yellow', 1000, () => {
      canviColors2('green', 1000, () => {
        canviColors2('blue', 1000, () => {
          canviColors2('purple', 1000, () => {})
        })
      })
    })
  })
})

// Aquest patró és molt habitual en JS, és la manera com podem fer que una funció s'executi després d'una altra.

// 5. Quan fem una petició a una API (per exemple a una base de dades de pel·lícules), ho fem de la següent manera:

// searchMoviesAPI('Matrix', () => {
//     saveToMyDB(movies, () => {
//         //si funciona, fes això:
//     }, () => {
//         //si no funciona, fes això altre
//     })
// }, () => {
//     //if API is down, or request failed
// })

// Això implica que a vegades tindrem més d'una Callback per una petició i de seguida es pot convertir en un problema de manteniment del codi.
// Veure diapo "Calback Hell" - Things get messy! 

// Aquí és on entren en joc les Promises.
