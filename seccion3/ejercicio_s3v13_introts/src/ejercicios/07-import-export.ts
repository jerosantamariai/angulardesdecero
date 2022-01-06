

// VIDEO 22: IMPORTACIONES Y EXPORTACIONES

import { Producto, calcularISV } from "./06-desestructuracion-funcion";

const carritoComrpas: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 350
    }
];

const [total, isv] = calcularISV( carritoComrpas );

console.log('Total ', total);
console.log('ISV: ', isv);