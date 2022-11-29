let a = 5;

if ( a >= 10 ){ // se puedeb pasar valores direfente de un booleano undefined, null, una asignacion
    console.log( 'A es mayor o igual a 10' );
} else {
    console.log('A es menor a 10');
}

// console.log('Fin del programa');

const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0: domingo, 1: lunes, 2: martes...

console.log({ dia });

if ( dia === 2 ){
    console.log('Martes');
} else if ( dia === 1) {
    console.log('Lunes');

    // if ( dia == 1 ) {
    //     console.log('Lunes');
    // } else {
    //     console.log('No es lunes ni domingo');
    // }
} else if ( dia === 3 ) {
    console.log('Miercoles');
} else {
    console.log('No es Martes, domingo, miercoles...')
}

// Sin usar If Else. o Switch, unicamente objetos
dia = 3; // 0: domingo, 1: lunes, 2: martes...
const diasLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
    7: 'Domingo'
}

const diasLetras2 = [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo' ];

// dia de la semana
// console.log( diasLetras[dia] || 'Dia no definido');
console.log( diasLetras2[dia] || 'Dia no definido');
