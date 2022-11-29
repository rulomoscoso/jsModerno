// Todos los tipos de datos primitivos son pasados por valor
let a = 10;
let b = a;
a = 30;

console.log({ a, b });

// Todos los objetos son pasados por referencia(En JS todo 
// es un objeto exeptuando los primitivos)
let juan = { nombre: 'Juan' };
//operador Spread rompe la referencia de JS.
let ana  = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana });


const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter ' };
let tony  = cambiaNombre( peter );

console.log({ peter, tony });

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('spread');
const otrasFrutas = [...frutas];
console.timeEnd('spread');

console.time('slice');
const otrasFrutas2 = frutas.slice();
console.timeEnd('slice');


otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });