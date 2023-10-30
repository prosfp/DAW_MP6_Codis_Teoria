// Async és una mà de pintura sobre les promeses, ens ajuda a "netejar" encara una mica més el procés asíncron

// 1. Les funcions "Async" sempre retornen "Promise"
// 2. Quan la funció retorna un valor, la promesa es resoldrà ("resolve") amb aquest valor
// 3. Si en canvi llança una excepció (throw exception), la promesa serà rebutjada ("rejected")

// async function hello() {}

// const hola = async () => {
//   throw new Error('ErrorPablo', 'Oups, error!')
//   //throw 'Error!!!'
//   //Qualssevol error (syntax, reference...) serà entès com un "rejected" per la promesa
//   return 'hello world'
// }

// // Si retorno un valor, la promesa es resol, altrament si es dona un error, es rebutja.

// hola()
//   .then(data => {
//     console.log(`PROMISE RESOLVED WITH ${data}`)
//   })
//   .catch(err => {
//     console.log('PROMISE REJECTED!')
//     console.log(err.stack)
//   })

// Anem a fer un exemple més real

const login = async (username, password) => {
  if (!username || !password) throw 'Manquen credencials'
  if (password === '1234') return 'Benvingut!'
  throw 'invalid password'
}

// login('pablo', '1234')
//   .then(msg => {
//     console.log('LOGGED IN!')
//     console.log(msg)
//   })
//   .catch(err => {
//     console.log('LOGIN FAILED')
//     console.log(err)
//   })

// Vale, però de moment aquí no hi ha res asincron no?
// Async --> retorna promise
// Retorna resolve/rejected amb els valors corresponents

// D'acord, anem a veure "Await"!
// El farem servir DINS d'una funció Async!
// Anem a recuperar el cas dels colors:

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color
      resolve()
    }, delay)
  })
}

//   delayedColorChange('red', 1000)
//   .then(() => delayedColorChange('orange', 1000))
//   .then(() => delayedColorChange('blue', 1000))
//   .then(() => delayedColorChange('violet', 1000))
//   .then(() => delayedColorChange('yellow', 1000))
//   .then(() => delayedColorChange('green', 1000))

async function rainbow() {
  await delayedColorChange('red', 1000)
  await delayedColorChange('yellow,1000')
  await delayedColorChange('orange', 1000)
  console.log('Hi!')
  await delayedColorChange('blue', 1000)
  await delayedColorChange('violet', 1000)
  //finalment posaríem el return
  return 'All done'
}

//rainbow()

// És bastant pràctic no haver-me de preocupar per encadenar les diferents callbacks, .thens, returning promises...
// Simplement espero "await" promises per continuar fent la meva feina.

// Amb el -return "All done"- gestiono el meu .then fora de rainbow (similarment al catch final)
//rainbow().then(() => console.log('End of Rainbow'))

// Puc inclus encapsular tot aquest seguit d'accions sota una nova promesa i ni tan sols he de fer ús del then com a tal.

async function printRainbow() {
  await rainbow()
  await rainbow()
  console.log('End of Rainbow')
}

//printRainbow()

// Anem a veure com resoldríem el cas que les promeses siguin Rejected

// Tornem a l'exemple d'una petició "fake" que triga un temps random retornar

const fakeRequest = url => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500
    setTimeout(() => {
      if (delay > 3000) {
        reject("Oh! Temps d'espera exhaurit! :(")
      } else {
        resolve(`Yeah! Aquí tens les teves dades de ${url}`)
      }
    }, delay)
  })
}

async function makeTwoRequests() {
  try {
    let data1 = await fakeRequest('/page1')
    console.log(data1)
    let data2 = await fakeRequest('/page2')
    console.log(data2)
  } catch (e) {
    console.log('ERROR!')
    console.log('Error is:', e)
  }
}

makeTwoRequests()

// Molt més net, fàcil de seguir, lògica 
// IMPORTANT
// 1. async i await s'ha d'utilitzar conjuntament (excepcions: JS Modules i Chrome DevTools Console)
// 2. async/await només afecta al receptor, com gestionem el retorn de la promesa. 
// 3. Pots fer "await" a qualssevol funció que retorna una Promesa (fetch)
// 4. Qualssevol funció es pot converitr a async. 
// 5. Totes les funcions async, immediatament passarà a retornar una promesa.
// 6. Error handling amb try/catch
