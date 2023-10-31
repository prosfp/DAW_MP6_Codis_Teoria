// function exempleVar() {
//   if (true) {
//     x = 20;
//     var x; // Aquesta x substitueix la primera x
//   }
//   console.log(x); // Imprimeix 20
// }

// exempleVar();

let client = "Joan";
let preuDescompte = "220"; // camelCase

//Podem Reassignar amb qualsevol tipus

console.log(client);
console.log(typeof client);
client = "20";
console.log(client);
client = true;
console.log(client);

// Podem iniciar sense valor
let preu = null;
console.log(preu);

if (client === 20) {
  console.log("som iguals");
}

// == --> compara contingut només

// === --> compara contingut i tipus
