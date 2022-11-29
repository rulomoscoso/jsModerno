class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log( this.nombre );
        console.log('Hola a todos soy un metodo estatico');
    }

    //Por defecto todas las clases tienen implementado el 'use strict'
    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    //El constructor se ejecuta en el momento de crear una instancia
    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase' ) {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`
    }

    quienSoy () {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase () {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${ this.frase }`);
    }
}

const spiderman = new Persona(
    'Peter parker',
    'Spider',
    'Soy tu amigable vecino Spiderman'
);

const ironman = new Persona(
    'Tony Stark',
    'Ironman',
    'Yo soy ironman'
);

// Persona._conteo = 2;
// console.log(spiderman);
// console.log(ironman);
spiderman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tia May';
// spiderman.nemesis = 'Duende Verde';

// console.log( spiderman.getComidaFavorita);
// console.log( spiderman );
console.log('Conteo estatico', Persona._conteo);
console.log( Persona.conteo );
Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo';
console.log( Persona.propiedadExterna )
console.log( Persona );
