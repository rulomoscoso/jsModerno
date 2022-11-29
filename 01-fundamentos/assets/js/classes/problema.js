const fher = {
    nombre: 'fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }` );
    }
}

const pedro = {
    nombre: 'pedro',
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }` );
    }
}

fher.imprimir();
pedro.imprimir();

// Asi se declaraban Clases en JS ya no se usa esta manera
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }` );
    }
}

const maria = new Persona('Maria', 18);
console.log(maria);
maria.imprimir();
const melissa = new Persona('Melissa', 35);
melissa.imprimir();