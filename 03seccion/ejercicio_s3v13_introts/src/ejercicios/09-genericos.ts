// VIDEO 26: GENERICOS

function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hello World!');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy( [1,2,3,4,5,6,7,8,9,0] );