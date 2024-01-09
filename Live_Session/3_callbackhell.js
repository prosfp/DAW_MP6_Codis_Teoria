//1. document.body.style.backgroundColor = 'red'

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
//   document.body.style.backgroundColor = 'yellow'
// }, 4000)

// setTimeout(() => {
//   document.body.style.backgroundColor = 'blue'
// }, 5000)

//2. Com fer-ho de manera més elegant

// setTimeout(() => {
//   document.body.style.backgroundColor = 'red'
//   setTimeout(() => {
//     document.body.style.backgroundColor = 'orange'
//     setTimeout(() => {
//       document.body.style.backgroundColor = 'purple'
//     }, 1000)
//   }, 1000)
// }, 1000)

//3. I si fem una funció que em permeti canviar el color de fones i passar-li el "delay"

// const canviColors = (nouColor, delay) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = nouColor
//   }, delay)
// }

// canviColors('red', 1000)
// canviColors('orange', 2000)
// canviColors('purple', 3000)

// 4. I si afegeixo una funció de callback a la propia funció canviColors?

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


// 5. Qaun fem una petició a una API (per exemple a una BBDD de pel·lícules), seria similar a:ç

searchMovieAPI('Matrix', ()=>{
    saveToMyDB(movies, ()=>{
        //Si funciona, fes això
    }, () => {
        //Si no funciona, fes això altre
    })
}), ()=>{
    //Si l'API està caiguda, o la request ha fallat 
}