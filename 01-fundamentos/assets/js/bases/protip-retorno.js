// function crearPersona( nombre, apellido ) {
//     return { nombre, apellido }
// }
const crearPersona = ( nombre, apellido ) => ({ nombre, apellido });


const persona = crearPersona( 'Raul', 'Moscoso' );
console.log( persona );


function imprimeArgumentos(){
    console.log( arguments );
}

// parametro rest: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
const imprimeArgumentos2 = ( edad, ...args ) =>{
    //console.log( {edad, args} );
    return args;
}

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Raul', 'Hola');
console.log({ casado, vivo, nombre, saludo });


const { apellido: nuevoApellido } = crearPersona( 'Raul', 'Moscoso' );
console.log({ nuevoApellido })

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {
//     console.log('nombre', personaje.nombre);
//     console.log('codeName', personaje.codeName);
//     console.log('vivo', personaje.vivo);
//     console.log('edad', personaje.edad);
//     console.log('trajes', personaje.trajes);
// }

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
    console.log({ nombre });    
    console.log({ codeName });    
    console.log({ vivo });    
    console.log({ edad });    
    console.log({ trajes });    
}

imprimePropiedades( tony );