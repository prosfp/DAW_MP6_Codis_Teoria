// Anem a veure alguns exemples més realistes

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

// Com veus aquestes callbacks 'success' i 'failure' es criden i també
// hi ha una informació/string que passem com a paràmetre.

// Com podem fer ús d'aquestes funcions de Callback

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
        fakeRequestCallback(
          'amazon.com/page3',
          function (response) {
            console.log('page3 ha funcionat!')
            console.log(response)
          },
          function (err) {
            console.log('ERROR amb Page3!!!', err)
          }
        )
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
