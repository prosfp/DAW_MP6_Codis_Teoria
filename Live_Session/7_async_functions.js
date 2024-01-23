// Async és una mà de pintura sobre les promeses, ens ajuda a "netejar" encara
// una mica més el procés asíncron
// NO AFEGEIG RES NOU A NIVELL DE PROMESES

// 1. Les funcions "Async" sempre retornen "Promise"
// 2. Quan la funció retorna un valor, la promesa es resoldrà ("resolve") amb aquest valor
// 3. Si en canvi llança una excepció (throw exception), la promesa serà rebutjada ("rejected")

// const hola = async () => {
//   throw new Error('El meu error!')
//   //return 'hello world'
// }

// hola()
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => {
//     console.log(err)
//   })

// EXEMPLE MÉS REALISTA

// const login = async (username, password) => {
//   if (!username || !password) throw 'Manquen credencials'
//   if (password === '1234') return 'Benvingut!'
//   throw 'invalid password'
// }

// login('pablo', '1234')
//   .then(msg => {
//     console.log('LOGGED IN!')
//     console.log(msg)
//   })
//   .catch(err => {
//     console.log('LOGIN FAILED')
//     console.log(err)
//   })

// ANEM A VEURE UN CAS REALMENT ASÍNCRON

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color
      resolve()
    }, delay)
  })
}

// delayedColorChange('red', 1000)
//   .then(() => delayedColorChange('orange', 1000))
//   .then(() => delayedColorChange('blue', 1000))
//   .then(() => delayedColorChange('violet', 1000))
//   .then(() => delayedColorChange('yellow', 1000))
//   .then(() => delayedColorChange('green', 1000))

async function rainbow() {
  await delayedColorChange('red', 1000)
  await delayedColorChange('yellow', 1000)
  await delayedColorChange('orange', 1000)
  await delayedColorChange('blue', 1000)
  await delayedColorChange('violet', 1000)
  return 'All done'
}

// És bastant pràctic no haver-me de preocupar per encadenar les diferents callbacks, .thens, returning promises...
// Simplement espero "await" promises per continuar fent la meva feina.

async function printRainbow() {
  await rainbow()
  console.log('End of Rainbow')
}

//printRainbow()

// Anem a veure com resoldre el cas que les promeses siguin Refusades

// Tornem a l'exemple de la petició "fake"

const fakeRequest = url => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500
    console.log(delay)
    setTimeout(() => {
      if (delay > 3000) {
        reject("Temps d'espera exhaurit! :(")
      } else {
        resolve(`Yeah! Aquí tens les teves dades de ${url}`)
      }
    }, delay)
  })
}

// Entra en joc l'ús de try/catch

async function makeTwoRequests() {
  try {
    let data1 = await fakeRequest('meva_url_1')
    console.log(data1)
    let data2 = await fakeRequest('meva_url_2')
    console.log(data2)
  } catch (e) {
    // En cas que alguna de les peticions es rebutgi
    console.log('ERROR')
    console.log('Existeix un error:', e)
  }
}

makeTwoRequests()

// Molt més net, fàcil de seguir, lògica
// IMPORTANT
// 1. async i await s'ha d'utilitzar conjuntament (excepcions: JS Modules i Chrome DevTools Console)
// 2. async/await només afecta al receptor, com gestionem el retorn de la promesa.
// 3. Pots fer "await" a qualssevol funció que retorna una Promesa (fetch)
// 4. Qualssevol funció es pot converitr a async.
// 5. Error handling amb try/catch