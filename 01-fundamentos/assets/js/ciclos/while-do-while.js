const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// La condicion tiene que ser verdadera para que se ejecute
// while( i < carros.length ) {
//     console.log( carros [i] );
//     i++;  
// }

// undefined
// null
// false
while( carros[i] ) {
    if( i === 1 ) {
        i++;
        continue;
    }
    console.log( carros [i] );
    i++;  
}

console.warn('Do While');
let j = 0;

do {
    console.log( carros[j] );
    j++;
} while( carros[j] );