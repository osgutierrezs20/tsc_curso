export class Persona {
    nombre; // accesible de cualquier parte
    edad; // accesible solo dentro de la clase y sus subclases
    esDesarrollador; // accesible solo dentro de la clase
    constructor(nombre, edad, esDesarrollador) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }
    saludar() {
        this.esDev();
        return `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años
         y ${this.esDesarrollador ? "soy" : "no soy"} desarrollador.`;
    }
    obtenerEdad() {
        return this.edad;
    }
    esDev() {
        return this.esDesarrollador;
    }
}
//# sourceMappingURL=clase.js.map