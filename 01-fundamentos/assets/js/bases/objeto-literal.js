const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90625',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};
console.log( personaje )
console.log( 'Nombre', personaje.nombre );
console.log( 'Nombre', personaje['nombre'] );
console.log( 'Edad', personaje.edad );

console.log( 'Coors', personaje.coords );
console.log( 'Coors', personaje.coords.lat );

console.log( 'No. Trajes', personaje.trajes.length );
console.log( 'Ultimo traje', personaje.trajes[ personaje.trajes.length - 1 ] );

const x = 'vivo';
console.log( 'Vivo', personaje[x] );

//Cuando el nombre de una propiedad es un string se accede mediante
// corchete y no con notacion de puntos.
console.log( 'Ultima pelicula', personaje['ultima-pelicula'] );

// MAS DETALLES
delete personaje.edad;
console.log( personaje );

personaje.casado = true;


const entriesPares = Object.entries( personaje );
console.log( entriesPares );

//personaje = true;
console.log( personaje );

Object.freeze( personaje );

personaje.dinero = 100000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log(personaje)


const proiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log({ proiedades, valores });
