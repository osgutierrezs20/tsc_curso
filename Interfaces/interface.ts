interface Persona {
    nombre: string;
    edad: number;
    eDesarrollador: boolean;
}   

let persona: Persona = {
    nombre: "Ana",
    edad: 25,
    eDesarrollador: true
}; 
console.log("Persona: ", persona);

let personas: Persona[] = [
    { nombre: "Ana", edad: 25, eDesarrollador: true },
    { nombre: "Luis", edad: 30, eDesarrollador: false },
    { nombre: "Carlos", edad: 35, eDesarrollador: true }
];
console.log("Personas: ", personas);

interface Sumar {
    (a: number, b: number): number;
}
let sumar: Sumar = (a: number, b: number): number => {
    return a + b;
}
console.log("Resultado de la suma: ", sumar(5, 10));


interface Par<T, U>{
  primero: T;
  segundo: U;
}
let par: Par<string, number> = {
    primero: "Edad",
    segundo: 30
};
console.log("Par: ", par);


