class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`)
  }
}

// Les classes ens ajuden a crear objectes amb les mateixes propietats i mètodes sense haver de repetir el codi

let me = new Person('John', 30)

// Si analitzem "me" com a variable, veurem que ella com a tal no té el mètode "sayHello", però si que el té el seu "prototype".
// Això fa que quan cridem aquest mètode, el busqui primer a la instància i si no el troba, el buscarà al seu "prototype".

me.sayHello()

// De fet podríem modificar el mètode "sayHello" a través del seu "prototype" i així modificaríem el mètode per totes les instàncies de la classe

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I'm a person`)
}

me.sayHello()

// Podem crear una nova classe que hereti de la classe Person

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age)
    this.grade = grade
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm a student`)
  }
}
