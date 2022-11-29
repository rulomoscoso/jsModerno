// Primitivos: Es una informacion que no son un objeto y son inmutables.
// Boolean - true / false :: Verdadero y Falso
// Null - Sin valor en lo absoluto
// Undefined - Una variable declarada que aun no se le asigna valor
// Number - integers, floats, etc.
// String - Una cadena de caracteres
// Symbol - Es un valor unico que no es igual a ningun otro valor.

let nombre = 'Peter Parker';
console.log(nombre);

nombre = 'Ben Parker';
console.log(nombre);

nombre = "Tia May";

console.log(typeof nombre)

nombre = 123
console.log(typeof nombre)

let esMarvel = true;
console.log(typeof esMarvel)

let edad = 33.00;
console.log(typeof edad)

let superPoder;
console.log(typeof superPoder)

let soyNull = null;
console.log(typeof soyNull);

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log(typeof symbol1);

console.log( symbol1 === symbol2 );

