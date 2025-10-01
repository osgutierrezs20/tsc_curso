/*
El mapped type de PersonaSoloLectura es:
PersonaSoloLectura =
{
    readonly nombre: string;
    readonly edad: number;
}
*/
var persona = {
    nombre: "Oscar",
    edad: 30
};
console.log(persona.nombre);
function esNumero(valor) {
    return (typeof valor === "number");
}
var resultado1 = esNumero(123); // true
var resultado2 = esNumero("Hola"); // false
console.log(resultado1);
console.log(resultado2);
