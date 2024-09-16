// Recordem el Callback Hell que teníem?

// const canviColors2 = (nouColor, delay, callback) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = nouColor
//     callback()
//   }, delay)
// }

// canviColors2('red', 1000, () => {
//   canviColors2('orange', 1000, () => {
//     canviColors2('yellow', 1000, () => {
//       canviColors2('green', 1000, () => {
//         canviColors2('blue', 1000, () => {
//           canviColors2('purple', 1000, () => {})
//         })
//       })
//     })
//   })
// })

// Anem a veure com quedaria això amb les Promeses. 

//Promise

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color
      resolve()
    }, delay)
  })
}

// Ja no passem un Callback a la funció! Ho gestionem amb resolve! 

// Però pel que fa a l'encadenament realment canvia molt la manera i la facilitat amb com ho podem expressar (a més de poder gestionar els errors
// amb un sol "catch")

delayedColorChange('red', 1000)
  .then(() => delayedColorChange('orange', 1000))
  .then(() => delayedColorChange('blue', 1000))
  .then(() => delayedColorChange('violet', 1000))
  .then(() => delayedColorChange('yellow', 1000))
  .then(() => delayedColorChange('green', 1000))

// Vale... tenim doncs el següent esquema general de les promeses:
// PROMISE CREATOR
// function getData(){
//     return new Promise(...)
// }

// //PROMISE RECEIVER
// getData()
//     .then(result=>{...})
//     .catch(error => {...})

// I si poguéssim tractar això sense haver d'encadenar a l'interior, com si es tractés d'una funció més?

// const result = getData()

// Oups, però això és asyncron!!! Anem a veure com ho fem.
