// VIDEO 23

class Heroe {
    alterego: string;
    edad: number;
    nombreReal: number;

    //ESTO ES LO QUE HACE QUE SE DIFERENCIE UNA INTERFACE DE UNA CLASE. SE PUEDEN REALIZAR MULTIPLES FUNCIONES.
    // imprimirNombre() {
    //     return this.alterego + ' ' + this.nombreReal;
    // }
}

// VIDEO 25

class PersonaNormal {
    constructor (
        public nombre: string, 
        public direccion: string
    ) {}
}

// VIDEO 24

class Heroe2 extends PersonaNormal {
    constructor (
        public alterego: string,
        public edad?: number,
        public nombreReal?: string
    ) {
        // SUPER() VIENE DEL VIDEO 25
        super(nombreReal, 'NY, USA');
    }
}


const ironman = new Heroe2('ironman', 45, 'Tony');

console.log(ironman);