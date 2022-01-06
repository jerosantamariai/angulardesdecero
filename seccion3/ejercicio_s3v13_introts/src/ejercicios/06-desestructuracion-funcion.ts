
// VIDEO 21: DESESTRUCTURACION DE ARGUMENTOS

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'iPhone 13 250gb',
    precio: 900,
}

const tableta: Producto = {
    desc: 'iPad Pro',
    precio: 1500
}


// ASI ES COMO SERIA EL EJERCICIO NORMALMENTE,

// function calcularISV(productos: Producto[]) {
//     let total = 0;

//     productos.forEach( ( producto ) => {
//         total += producto.precio;
//     })

//     return total * 0.19;
// }

// AHORA LA DESESTRUCTURACION VIENE EN LA FUNCION CALCULARISV Y QUEDARIA DE LA SIGUIENTE MANERA
export function calcularISV(productos: Producto[]): [number, number] {
    let total = 0;

    productos.forEach( ({ precio }) => {
        total += precio;
    })

    return [total, total * 0.19];
}

const articulos = [ telefono, tableta ];

const [ total, isv ] = calcularISV(articulos);
//OJO:  EN LA LINEA ANTERIOR DESESTRUCTURÉ EL ARREGLO QUE SE REALIZÓ EN LA LINEA 40. Y DE ESA FORMA, EL RESULTADO NO ES UN ARREGLO.

console.log("El total es: ", total);
console.log("Impuesto Sobre Venta es: ", isv);


