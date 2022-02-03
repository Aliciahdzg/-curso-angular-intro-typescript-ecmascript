
/*
    ===== Código de TypeScript =====
*/
// tipo any es necesario evitarlo, hay que usar tipado estricto

// 3 niveles de acceso a las propiedades de las clases. Si no agregas el nivel en la clase por defecto es publico
// private propiedad visible solo dentro de la clase
// public propiedad visible fuera de la clase
// static acceder a la propiedad sin crear una instancia de la clase
class PersonaNormal {

    constructor (
        public nombre: string,
        public direccion: string,
    ) {}
}
class Heroe extends PersonaNormal {
    //alterEgo: string; 
    //edad: number;  
    //nombreReal: number; 
    
    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string,
        ) {
            super( nombreReal, 'New York, USA' );
        }
}
// las clases sirven para crear instancias en una interface no puedo definir como quiero que funcione un metodo

const ironman = new Heroe('Ironman', 45, 'Tony');

console.log(ironman);