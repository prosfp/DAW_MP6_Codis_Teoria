// OBJECTES

// Com es declaren?

const producte = {
  nom: "prèssec",
  preu: "3",
  disponible: true,
};

const client = {
  nom: "Mireia",
  soci: true,
};

// console.log(producte.nom);

// // Destructuring
// const { nom, preu, disponible } = producte;
// console.log(nom);
// console.log(preu);
// console.log(disponible);

// console.log(producte);
// console.table(producte);

// //Afegir nou paràmetre
// producte.pais = "Marroc";
// console.log(producte);

// Dstructuring amb 2 o més objectes

const { nom: nomProducte, preu, disponible } = producte;
const { nom: nomClient, soci } = client;

console.log(nomProducte);
console.log(nomClient);
