// Condicionals;
// Ex - Banc;

const disponible = 6000;
const retirar = 5000;
const targeta = false;

// if (disponible > retirar) {
//   console.log("Pots retirar");
// } else {
//   console.log("No tens calers");
// }

// Conditional (ternary) operator

disponible > retirar
  ? console.log("pots retirar")
  : targeta === true
  ? console.log("retira amb targeta")
  : console.log("no hi ha manera de treure calers");
