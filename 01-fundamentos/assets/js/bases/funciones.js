function saludar( nombre ){
    //console.log( arguments );
    //console.log( 'Hola ' + nombre );
    return [1,2];

    //Esto nunca se va a ejecutar
    console.log('Despues del return');
};

const saludar2 =  function( nombre ){
    console.log('Hola ' + nombre);
};

const saludarFlecha =  () => {
    console.log( 'Hola flecha' )
}

const saludarFlecha2 =  ( nombre ) => {
    console.log( 'Hola ' + nombre )
}


const retornoDeSaludar = saludar( 'Raul', 20, true, 'Costa rica' );
// saludar2( 'Raul' );
//saludarFlecha2( 'Melisa' );

function sumar( a, b ){
    return a + b;
}

const sumar2 = (a,b) =>  a + b;

function getAleatorio() {
    return Math.random();
}


// Transformar la funcion anterior en una funcion de 
// flecha que no tenga llaves getAleatorio2
const getAleatorio2 = () => Math.random();



console.log( getAleatorio2() );