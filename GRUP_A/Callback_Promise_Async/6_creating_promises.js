// const fakeRequest = url => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random()
//     setTimeout(() => {
//       if (rand < 0.7) {
//         resolve('YOUR FAKE DATA HERE')
//       }
//       reject('Request Error!')
//     }, 1000)
//   })
// }

// const canviColors = (nouColor, delay, continua) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = nouColor;
//       continua && continua(); // Si continua és true, executa la funció continua
//     }, delay);
//   };

// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// D'entrada no hi ha una gran "millora" o optimització respecte la funció de callback...
//Promise
const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color
      resolve()
    }, delay)
  })
}

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

