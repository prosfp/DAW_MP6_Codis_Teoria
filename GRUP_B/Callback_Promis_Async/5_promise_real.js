// Promises són objectes que representen la finalització o el fracàs d'una operació asíncrona.
// Habitualment per fer peticions a un servidor, utilitzem el mètode fetch, que retorna una Promise.
// URL incorrecta, no tens connexió a internet, no tens les credencials...

//THE PROMISE VERSION

//1. Segur que algun cop has demanat una pizza o has fet alguna comanda a un restaurant. Bé, sabies que la comanda que has fet
//no la tindries immediatament i tot i així no t'has quedat esperant a casa teva sense fer res oi? Doncs les promeses funcionen
//més o menys igual. Tu fas la teva petició i segueixes fent altres coses, i quan la petició està resolta, la promesa s'executa.

// Ara sí, anem a veure com ens ajuda el concepte de promesa a simplificar el codi

//Només passem una url
const fakeRequestPromise = url => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500
    console.log(delay)
    setTimeout(() => {
      if (delay > 4000) {
        reject("Oh! Temps d'espera exhaurit! :(")
      } else {
        resolve(`Yeah! Aquí tens les teves dades de ${url}`)
      }
    }, delay)
  })
}

// La gràcia de les Promise és que enlloc de passar una funció de callback, el que fa és retornar una Promise que acabarà resolent o rebutjant.
// Aquí estem fent ús del setTimeout però imaginem una petició a una API

//Tenim 3 estats - pending, resolved, rejected
//En funció de l'estat que retorni la promesa, s'executarà el then o el catch
// Només un dels casos s'executarà, o success o failed (then/catch)
// Anem a veure-ho:

// const request = fakeRequestPromise('url_de_la_meva_api');
// request
//   .then(() => {
//      // Si la promesa s'ha resolt, s'executarà el then
//     console.log('Peticio resolta');
//   })
//   .catch(() => {
//      // Si la promesa s'ha rebutjat, s'executarà el catch
//     console.log('Peticio fallida');
//   });

// ANEM A VEURE COM FER EL NESTING DE PETICIONS

// const request2 = fakeRequestPromise('meva_api_1');
// request2
//   .then(() => {
//     console.log('Petició 1 resolta');
//     fakeRequestPromise('meva_api_2')
//       .then(() => {
//         console.log('Petició 2 resolta');
//       })
//       .catch(() => {
//         console.log('Petició fallida');
//       });
//   })
//   .catch(() => {
//     console.log('Peticio fallida');
//   });

// VALE, PERÒ AIXÒ NO MILLORA MASSA ELS PROBLEMES DE NESTING QUE TENÍEM ABANS?

// Anem a veure com fer realment la màgiaa amb les Promises i canvia realment el paradigma amb les callbacks

// const request3 = fakeRequestPromise('meva_api_1');
// request3
//   .then(() => {
//     console.log('Petició 1 resolta');
//     //enlloc de encadenar ara aqui el que puc és RETORNAR AQUESTA PROMESA
//     return fakeRequestPromise('meva_api_2');
//   })
//   .then(() => {
//     console.log('Petició 2 resolta');
//     return fakeRequestPromise('meva_api_3');
//   })
//   .then(() => {
//     console.log('Petició 3 resolta');
//   })
//   // It's "Flat"!!! I només necessitem un sol catch!
//   .catch(() => {
//     console.log('La petició ha fallat! ');
//   });

// NOMÉS NECESSIOT IMPLEMENTAR UN SOL CATCH, QUE SEGURAMENT SERÀ SUFICIENT PER TOTES LES PETICIONS QUE FEM

// Resolc la promesa i a més puc retornar com a valor una nova promesa, que això és el que fa que pugui encadenar les peticions sense haver de fer un nesting de callbacks

// Finalment, Les PROMISES son acceptades o rebutjades amb VALORS!!! Per tant, puc passar un valor a la següent promesa: 

const request4 = fakeRequestPromise('meva_api_1')
request4
  .then(data => {
    console.log('Petició 1 resolta')
    console.log(data)
    //enlloc de encadenar ara aqui el que puc és RETORNAR AQUESTA PROMESA
    return fakeRequestPromise('meva_api_2')
  })
  .then(data => {
    console.log('Petició 2 resolta')
    console.log(data)
    return fakeRequestPromise('meva_api_3')
  })
  .then(data => {
    console.log(data)
    console.log('Petició 3 resolta')
  })
  // It's "Flat"!!! I només necessitem un sol catch!
  .catch(data => {
    console.log(data)
    console.log('La petició ha fallat! ')
  })


// Normalment quan fem servir una API, les dades seran les dades en format JSON. 
