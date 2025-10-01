function identity(arg) {
    return arg;
}
let output1 = identity("Hello, TypeScript!");
console.log("Out: ", output1);
let output2 = identity(42);
console.log("Out: ", output2);
class Caja {
    contenido;
    constructor(contenido) {
        this.contenido = contenido;
    }
    obtenerContenido() {
        return this.contenido;
    }
}
let cajadeString = new Caja("Libros");
console.log("Contenido de la caja string: ", cajadeString.obtenerContenido());
let cajadeNumber = new Caja(100);
console.log("Contenido de la caja number: ", cajadeNumber.obtenerContenido());
let cajadeBoolean = new Caja(true);
console.log("Contenido de la caja boolean: ", cajadeBoolean.obtenerContenido());
export {};
// Uso con tipos personalizados
//# sourceMappingURL=main.js.map