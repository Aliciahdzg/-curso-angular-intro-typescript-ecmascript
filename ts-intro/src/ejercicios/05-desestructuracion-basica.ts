/*
    ===== Código de TypeScript =====
*/
// tipo any es necesario evitarlo, hay que usar tipado estricto

interface Reprodutor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reprodutor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Runaway',
    detalles: {
        autor: 'Aurora',
        anio: 2015
    }
}

const { volumen, segundo, cancion, detalles } = reproductor; 
const { autor } = detalles;

//console.log('El volumen actual de: ', volumen);
//console.log('El segundo actual de: ', segundo);
//console.log('La canción actual de: ', cancion);
//console.log('El autor es: ', autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']
const [ p1, p2, p3 ] = dbz;
// si solo quiero un dato se dejan los espacios
// const [ , , p3 ] = dbz;

console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);