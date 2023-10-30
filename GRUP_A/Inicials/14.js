function crearSuma(a) {
  return function (b) {
    console.log(a);
    return a + b;
  };
}
console.log(typeof sumar5);

var sumar5 = crearSuma(5);
var sumar10 = crearSuma(10);
console.log(sumar5(15));
console.log(sumar10(15));
