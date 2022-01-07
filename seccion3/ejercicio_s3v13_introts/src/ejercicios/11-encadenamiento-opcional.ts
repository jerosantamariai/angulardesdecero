
// VIDEO 28: ENCADENAMIENTO OPCIONAL

interface Pasajero {
    nombre: string;
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Jeronimo'
}

const pasajero2: Pasajero = {
    nombre: 'Javiera',
    hijos: [ 'Hijo1', 'Hijo2'],
}

function imprimeHijos(pasajero: Pasajero):void {
    const cuantosHijos = pasajero.hijos?.length || 0;   /* SI EXISTEN LOS HIJOS DIME CUANTOS HAY, SI NO, DIME 0 */

    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);