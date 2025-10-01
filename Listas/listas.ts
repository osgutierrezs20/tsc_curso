//Arreglos o Listas
let nombres: string[] = ["Ana", "Luis", "Carlos"];
console.log("Nombres: ", nombres);

let edades: number[] = [25, 30, 35];
console.log("Edades: ", edades);

let mixto: any[] = ["Hola", 42, true];
console.log("Mixto: ", mixto);

interface Persona {
    nombre: string;
    edad: number;
    eDesarrollador: boolean;
}

let personas: Persona[] = [
    { nombre: "Ana", edad: 25, eDesarrollador: true },
    { nombre: "Luis", edad: 30, eDesarrollador: false },
    { nombre: "Ambar preciosa", edad: 23, eDesarrollador: false }
];
console.log("Personas: ", personas);
personas.push({ nombre: "Marta", edad: 28, eDesarrollador: false });
console.log("Personas después de push: ", personas);

//Tuplas 
//No puede ser modificada
let persona: [string, number, boolean];
persona = ["Ana", 25, true];
console.log("Persona: ", persona);

let personasTupla: [string, number, boolean][] = [];
personasTupla.push(["Ana", 25, true]);
personasTupla.push(["Luis", 30, false]);
personasTupla.push(["Carlos", 35, true]);

personasTupla.forEach((personat) => {
    console.log("Personas: ", personat);

    let nombre: string = personat[0];
    let edad: number = personat[1];
    let eDesarrollador: boolean = personat[2];
    
    console.log("Nombre: ", nombre);
    console.log("Edad: ", edad);
    console.log("Es Desarrollador: ", eDesarrollador);
});

// Enumeradores
enum DiaDeLaSemana {
    Lunes,
    Martes,
    Miercoles, 
    Jueves,
    Viernes,
    Sabado,
    Domingo
}
let dia: DiaDeLaSemana = DiaDeLaSemana.Miercoles;
console.log("Día de la Semana: ", dia); // 2
console.log("Día de la Semana (nombre): ", DiaDeLaSemana[dia]); // Miercoles
