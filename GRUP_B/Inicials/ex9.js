// Tastet d'arrays

// Definició

const tecnologies = [10, 30, "React", "JS", true];
const fruites = ["pressec", "síndria", "cireres"];

// Accedir
console.log(tecnologies[2]);

// Ex. concatenació
let concatString = [];

concatString = concatString.concat(tecnologies, fruites);
//console.log(concatString);

//console.log(concatString); // Així no! string simplement

// Destructuring d'arrays

const [, varX, , varY] = tecnologies;
console.log(varX, varY);
