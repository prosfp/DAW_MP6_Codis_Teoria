// Scope - Àmbit

// No puc tenir 2 variables amb el mateix nom. Però si dins d'una funció:

let preu = 200;
function unaFuncio() {
  let preu = 300;
  console.log(preu);
}
unaFuncio();
console.log(preu);
