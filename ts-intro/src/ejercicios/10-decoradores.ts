/*
    ===== Código de TypeScript =====
*/
// Los decoradores sirven para agregar funcionalidades especiales a las clases

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }

@reportableClassDecorator
class MiSuperClase {
    public miPropiedad: string ='ABC123';

    imprimir() {
        console.log('Hola Mundo');
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log( miClase.miPropiedad );