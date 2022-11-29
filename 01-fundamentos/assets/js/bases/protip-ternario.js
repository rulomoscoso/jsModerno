const elMayor = (a,b) => ( a > b ) ? a : b;

const tieneMembresia = ( miembro ) => (miembro) ? '2 Dolares' : '10 Dolares';

console.log( elMayor(10,15) );
console.log( tieneMembresia(true));

const amigo = false;
const amigosArr = [
    'peter',
    'tony',
    'Dr. strange',
    (amigo) ? 'thor' : 'Loki',
    //(() => 'Nick Fury')(),
    elMayor(10,15),
];

console.log( amigosArr );

const nota = 98; // A+ A B+
const grado = (nota >= 95 ) ? 'A+' :
              (nota >= 90 ) ? 'A'  :
              (nota >= 85 ) ? 'B+' :
              (nota >= 80 ) ? 'B'  :
              (nota >= 75 ) ? 'C+' :
              (nota >= 70 ) ? 'C'   : 'F';

console.log({ nota, grado });