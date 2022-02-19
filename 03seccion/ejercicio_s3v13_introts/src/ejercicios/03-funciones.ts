// VIDEO 16

function sumar(a:number, b:number):number {
    return a + b;
}

const funcFlecha = (a:number , b:number):number => {
    return a - b;
}

function multiplicar (a:number, b:number, c?:number):number {
    return a * b;
}

const resultado1 = sumar(10, 8);
const resultado2 = funcFlecha(20,3);
const resultado3 = multiplicar(15,3);


console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

// VIDEO 17

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje:PersonajeLOR, curarX:number ):void {
    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Jeronimo',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida: ', this.pv);
    }
}

curar(nuevoPersonaje, 25);
nuevoPersonaje.mostrarHp();