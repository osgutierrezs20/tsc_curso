export class Persona {
    public nombre: string; // accesible de cualquier parte
    protected edad: number; // accesible solo dentro de la clase y sus subclases
    private esDesarrollador: boolean; // accesible solo dentro de la clase

    constructor(nombre: string, edad: number, esDesarrollador: boolean) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
     }   

     public saludar(): string { // Método público
        this.esDev();
        return `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años
         y ${this.esDesarrollador ? "soy" : "no soy"} desarrollador.`;
     }
 
     protected obtenerEdad(): number {// Método protegido
        return this.edad;
    }

    private esDev(): boolean { // Método privado
        return this.esDesarrollador;
    }   
                   
}



