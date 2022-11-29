class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log(this.nombre);
        console.log('Hola a todos soy un metodo estatico');
    }

    //Por defecto todas las clases tienen implementado el 'use strict'
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    //El constructor se ejecuta en el momento de crear una instancia
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

class Heroe extends Persona {

    clan;

    constructor(nombre, codigo, frase){

        super(nombre, codigo, frase);

        this.clan = 'Avenger';

        
    }

    quienSoy() {
        console.log(`Soy ${ this.nombre}, ${ this.clan }`);
        super.quienSoy();
    }
    
}
const spiderman = new Heroe( 'Peter parker', 'Spider', 'Soy tu amigable vecino Spiderman');
// const spiderman = new Heroe();

console.log( spiderman );
spiderman.quienSoy();