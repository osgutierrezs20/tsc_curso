function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hello, TypeScript!");
console.log("Out: ",output1);

let output2 = identity<number>(42);
console.log("Out: ",output2);

class Caja<T> {
    private contenido: T;

    constructor(contenido: T) {
        this.contenido = contenido;
    }
    public obtenerContenido(): T {  
        return this.contenido;
    }
}

let cajadeString = new Caja<string>("Libros");
console.log("Contenido de la caja string: ",cajadeString.obtenerContenido());

let cajadeNumber = new Caja<number>(100);
console.log("Contenido de la caja number: ",cajadeNumber.obtenerContenido());

let cajadeBoolean = new Caja<boolean>(true);
console.log("Contenido de la caja boolean: ",cajadeBoolean.obtenerContenido());
// Uso con tipos personalizados
