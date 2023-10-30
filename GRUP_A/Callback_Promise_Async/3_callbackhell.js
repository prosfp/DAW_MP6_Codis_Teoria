// ===============
// YIKES!!!!!!!!!!!
// ===============
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

// const canviColors = (nouColor, delay) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = nouColor;
//   }, delay);
// };

// canviColors("red", 2000);
// canviColors("orange", 4000);
// canviColors("yellow", 6000);

const canviColors = (nouColor, delay, continua) => {
  setTimeout(() => {
    document.body.style.backgroundColor = nouColor;
    continua && continua(); // Si continua és true, executa la funció continua
  }, delay);
};

// STILL A LOT OF NESTING!!!
canviColors("red", 1000, () => {
  canviColors("orange", 1000, () => {
    canviColors("yellow", 1000, () => {
      canviColors("green", 1000, () => {
        canviColors("blue", 1000, () => {});
      });
    });
  });
});

// searchMoviesAPI('Matrix', () => {
//     saveToMyDB(movies, () => {
//         //if it works, run this:
//     }, () => {
//         //if it doesn't work, run this:
//     })
// }, () => {
//     //if API is down, or request failed
// })
