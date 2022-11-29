let regresaTrue = () => {
    console.log('Regresa true');
    return true;
};

let regresaFalse = () => {
    console.log('Regresa false');
    return false;
};


console.warn('Not o la negacion');
console.log( true ); // true
console.log( !true ); // false
console.log( !false ); // true

console.log( !regresaFalse() );

console.warn('And'); // true si todos los valores son verdaderos
console.log( true && true ); // true
console.log( true && !false ); // false

console.log('==============');
console.log( regresaFalse() && regresaTrue() ); // solo se ejecula la primera que retorna false
console.log( regresaTrue() && regresaFalse() ); // se ejecuta regresaFalse porque la primera es verdadera

console.log('======&&========');
regresaFalse() && regresaTrue(); // si la primera es false solo ejecuta la primera
regresaTrue() && regresaFalse();  // si la primera es verdadera entonces ejecuta la segunda

console.log('4 condiciones ', true && true && true && false); //false

console.warn('OR');
console.log( true || false );
console.log( false || true );

console.log( regresaTrue() || regresaFalse() );

console.log('4 condiciones ', true || true || true || false); //true

// Pro tip: Asignaciones con operadores
console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola ' && 'Mundo' && soyFalse;
const a3 = soyFalse || 'Ya no soy falso';
const a4 = soyFalse || soyUndefined || soyNull || 'YA NO SOY FALSO DE NUEVO';
const a5 = soyFalse || soyUndefined || regresaTrue() || 'YA NO SOY FALSO DE NUEVO';

console.log({ a1, a2, a3, a4, a5,  });

if ( regresaFalse() && regresaTrue() && (true || false || true) ) {
    console.log('Hacer algo');
}else {
    console.log('Hacer otra cosa');
}