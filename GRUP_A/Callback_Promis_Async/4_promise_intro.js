

// Anem a veure alguns exemples més realistes amb un codi similar al de les peticions.

// makeReuest(
//   () => {
//     //All good
//   },
//   () => {
//     //Something went wrong
//   }
// )

// I pot evolucionar...

// makeRequest(
//   () => {
//     //All good
//      makeRequest(
//       () => {
//         //All good
//         makeRequest(
//           () => {
//             //All good
//             makeRequest(
//               () => {
//                 //All good
//                 makeRequest(
//                   () => {
//                     //All good
//                   },
//                   () => {
//                     //Something went wrong
//                   }
//                 )
//               },
//               () => {
//                 //Something went wrong
//               }
//             )
//           },
//           () => {
//             //Something went wrong
//           }
//         )
//       },
//       () => {
//         //Something went wrong
//       }
//     )
//   },
//   () => {
//     //Something went wrong
//   }
// )

// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500
  console.log(delay)
  setTimeout(() => {
    if (delay > 4000) {
      failure("Oh! Temps d'espera exhaurit! :(")
    } else {
      success(`Yeah! Aquí tens les teves dades de ${url}`)
    }
  }, delay)
}

// Com veus aquestes callbacks 'success' i 'failure' es criden i també hi ha una inofrmació que es passa com a paràmetre.
// Això ja ho hem vist per exemple amb el cas dels mètodes d'un array. La funció que passem com a paràmetre, es crida per cada element de l'array i rep com a paràmetre l'element.

// arr.map(function(element){
//   console.log(element)
//})

// Com podem fer ús doncs d'aquestes funcions de callback?

// fakeRequestCallback(
//   'amazon.com/page1',
//   function (response) {
//     console.log('Ha funcionat!')
//     console.log(response)
//   },
//   function (err) {
//     console.log('ERROR!!!', err)
//   }
// )

fakeRequestCallback(
  'amazon.com/page1',
  function (response) {
    console.log('page1 ha funcionat!')
    console.log(response)
    fakeRequestCallback(
      'amazon.com/page2',
      function (response) {
        console.log('page2 ha funcionat!')
        console.log(response)
      },
      function (err) {
        console.log('ERROR amb Page2!!!', err)
      }
    )
  },
  function (err) {
    console.log('ERROR amb Page1!!!', err)
  }
)

// Anem a enllaçar diferents peticions en cas que l'anterior hagi funcionat correctament.

// fakeRequestCallback(
//   'amazon.com/page1',
//   function (response) {
//     console.log('Page1 ha funcionat!')
//     console.log(response)
//     fakeRequestCallback(
//       'amazon.com/page2',
//       function (response) {
//         console.log('Page2 ha funcionat!')
//         console.log(response)
//         fakeRequestCallback(
//           'amazon.com/page3',
//           function (response) {
//             console.log('Page3 ha funcionat!')
//             console.log(response)
//           },
//           function (err) {
//             console.log('Page3 ERROR!!!', err)
//           }
//         )
//       },
//       function (err) {
//         console.log('Page2 ERROR!!!', err)
//       }
//     )
//   },
//   function (err) {
//     console.log('Page1 ERROR!!!', err)
//   }
// )

// Això és el que anomenem "Callback Hell" i és un dels problemes que ens resolen les Promises.
