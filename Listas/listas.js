//Arreglos o Listas
let nombres = ["Ana", "Luis", "Carlos"];
console.log("Nombres: ", nombres);
let edades = [25, 30, 35];
console.log("Edades: ", edades);
let mixto = ["Hola", 42, true];
console.log("Mixto: ", mixto);
let personas = [
    { nombre: "Ana", edad: 25, eDesarrollador: true },
    { nombre: "Luis", edad: 30, eDesarrollador: false },
    { nombre: "Ambar preciosa", edad: 23, eDesarrollador: false }
];
console.log("Personas: ", personas);
personas.push({ nombre: "Marta", edad: 28, eDesarrollador: false });
console.log("Personas después de push: ", personas);
//Tuplas 
//No puede ser modificada
let persona;
persona = ["Ana", 25, true];
console.log("Persona: ", persona);
let personasTupla = [];
personasTupla.push(["Ana", 25, true]);
personasTupla.push(["Luis", 30, false]);
personasTupla.push(["Carlos", 35, true]);
personasTupla.forEach((personat) => {
    console.log("Personas: ", personat);
    let nombre = personat[0];
    let edad = personat[1];
    let eDesarrollador = personat[2];
    console.log("Nombre: ", nombre);
    console.log("Edad: ", edad);
    console.log("Es Desarrollador: ", eDesarrollador);
});
// Enumeradores
var DiaDeLaSemana;
(function (DiaDeLaSemana) {
    DiaDeLaSemana[DiaDeLaSemana["Lunes"] = 0] = "Lunes";
    DiaDeLaSemana[DiaDeLaSemana["Martes"] = 1] = "Martes";
    DiaDeLaSemana[DiaDeLaSemana["Miercoles"] = 2] = "Miercoles";
    DiaDeLaSemana[DiaDeLaSemana["Jueves"] = 3] = "Jueves";
    DiaDeLaSemana[DiaDeLaSemana["Viernes"] = 4] = "Viernes";
    DiaDeLaSemana[DiaDeLaSemana["Sabado"] = 5] = "Sabado";
    DiaDeLaSemana[DiaDeLaSemana["Domingo"] = 6] = "Domingo";
})(DiaDeLaSemana || (DiaDeLaSemana = {}));
let dia = DiaDeLaSemana.Miercoles;
console.log("Día de la Semana: ", dia); // 2
console.log("Día de la Semana (nombre): ", DiaDeLaSemana[dia]); // Miercoles
export {};
//# sourceMappingURL=listas.js.map