

// VIDEO 19: DESESTRUCTURACION DE OBJETOS

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'One',
    detalles: {
        autor: 'Metallica',
        anio: 1989
    }
}

// ASI DEBERIA DE HABER QUEDADO ASÍ...

// console.log('El volumen actual de: ', reproductor.volumen);
// console.log('El segundo actual de: ', reproductor.segundo);
// console.log('El canción actual de: ', reproductor.cancion);
// console.log('El autor de: ', reproductor.detalles.autor);

// PERO CON DESESTRUCTURACION REALIZAMOS LO SIGUIENTE:
// AQUI DEJAMOS TODO EN UNA SOLA LINEA DE CODIGO
const { volumen, segundo, cancion, detalles:{ autor } } = reproductor;
// PODEMOS DESESTRUCTURAR DETALLES Y ASI PODEMOS ACCEDER A AUTOR
// const { autor } = detalles;

// CASO BORDER: PERO EN CASO DE QUE TENGAMOS UNA CONSTANTE QUE CONTENGA EL MISMO NOMBRE DEBEMOS DEFINR DE MEJOR MANERA NUESTRA DESESTRUCTURACION
// const autor = 'Plagiador';
// const { volumen, segundo, cancion, detalles:{ autor: autorDetalle } } = reproductor;


console.log('El volumen actual de: ', volumen);
console.log('El segundo actual de: ', segundo);
console.log('El canción actual de: ', cancion);
console.log('El autor de: ', autor);
// console.log('El autor de: ', autorDetalle);       -----> UTILIZAMOS ESTA LINEA DE CODIGO PARA IMPRIMIR PARA EL CASO BORDER EN VEZ DE LA ANTERIOR


// OJO: AL HABLAR DEL CASO BORDER, TAMBIEN PODEMOS UTILIZARLO PARA CAMBIAR EL NOMBRE DE LA VARIABLE PARA HACERLA MAS FACIL DE UTILIZAR
// const { volumen: vol, segundo, cancion, detalles:{ autor } } = reproductor;
// console.log('El volumen actual de: ', vol);




// VIDEO 20: DESESTRUCTURACION DE ARREGLOS

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];


// ASI HUBIESE QUEDADO DE UNA FORMA "CANONICA"
// console.log("Personaje N°1: ", dbz[0]);
// console.log("Personaje N°2: ", dbz[1]);
// console.log("Personaje N°3: ", dbz[2]);

// POR DESESTRUCTURACION DE ARREGLOS LO TENEMOS DE LA SIGUIENTE MANERA:

const [a1, a2, a3] = dbz;
console.log("Personaje N°1: ", a1);
console.log("Personaje N°2: ", a2);
console.log("Personaje N°3: ", a3);

// LA POSICION ES LA IMPORTANTE Y POR LO TANTO EL NOMBRE DEL ARGUMENTO DA IGUAL SIEMPRE Y CUANDO LO RENDERICEMOS DONDE CORRESPONDE
// OJO: SI NO ME INTERESAN LAS VARIABLES ANTERIORES SIMPLEMENTE SE DEJA SU ESPACIO VACIO MARCADO CON COMAS
// const [, , a3] = dbz;
// console.log("Personaje N°3: ", a3);

