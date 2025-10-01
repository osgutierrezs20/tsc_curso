interface Direccion{
    calle: string;
    numero: number;
    ciudad?: string;//opcional
}

let direccion: Direccion = {
    calle: "Calle Falsa",
    numero: 123,
    ciudad: "Springfield"
};
console.log(direccion);

//Read only
interface Persona{
    readonly edad: number;
    readonly nombre: string;
    readonly esDesarrollador: boolean;
}
let personaRead: Persona = {
    edad: 30,
    nombre: "Juan",
    esDesarrollador: true
};
console.log("Persona ",personaRead);
//personaRead.edad = 31; //Error  ésta propiedad es de solo lectura

//Interfaz extendida
interface Empleado extends Persona{
    readonly salario: number
}

let empeladoRead: Empleado = {
    edad: 30,
    nombre: "Juan",
    esDesarrollador: true,
    salario: 50000
};
console.log("Empleado ",empeladoRead);