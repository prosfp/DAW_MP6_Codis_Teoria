//THE PROMISE VERSION
//Només passem una url
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Oh! Temps d'espera exhaurit! :(");
      } else {
        resolve(`Yeah! Aquí tens les teves dades de ${url}`);
      }
    }, delay);
  });
};

//Tenim 3 estats - pending, resolved, rejected
//En funció de l'estat que retorni la promesa, s'executarà el then o el catch
// Només un dels casos s'executarà, o success o failed (then/catch)
// Anem a veure-ho:

// const request = fakeRequestPromise('url_de_la_meva_api');
// request
//   .then(() => {
//     console.log('Peticio resolta');
//   })
//   .catch(() => {
//     console.log('Peticio fallida');
//   });

//Podem anar encadenant noves peticions

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

// Ja em millorat una mica el codi, ja no estem passant les funcions de callback
// a través de la pròpia crida

// Encara podem fer més màgia amb les PROMISES
// Com canvia realment el paradigma amb les callbacks

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

// Les PROMISES son acceptades o rebutjades amb VALORS!!!

const request4 = fakeRequestPromise('meva_api_1');
request4
  .then((data) => {
    console.log('Petició 1 resolta');
    console.log(data);
    //enlloc de encadenar ara aqui el que puc és RETORNAR AQUESTA PROMESA
    return fakeRequestPromise('meva_api_2');
  })
  .then((data) => {
    console.log('Petició 2 resolta');
    console.log(data);
    return fakeRequestPromise('meva_api_3');
  })
  .then((data) => {
    console.log(data);
    console.log('Petició 3 resolta');
  })
  // It's "Flat"!!! I només necessitem un sol catch!
  .catch((data) => {
    console.log(data);
    console.log('La petició ha fallat! ');
  });
