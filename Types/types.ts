type PersonaType = {
    nombre: string;
    edad: number;

}

type Parcial<T> = {
    [P in keyof T]?: T[P];
}

type PersonaParcial = Parcial<PersonaType>;
/*
El mapped type de PersonaParcial es:
PersonaParrcial = 
{
    nombre?: string;
    edad?: number;  
            
    }
*/
type SoloLectura<T> = {
    readonly [P in keyof T]: T[P];
}

type PersonaSoloLectura = SoloLectura<PersonaType>;
/*
El mapped type de PersonaSoloLectura es:
PersonaSoloLectura =
{
    readonly nombre: string;
    readonly edad: number;
}
*/
let persona : PersonaSoloLectura = {
    nombre: "Oscar",
    edad: 30
};
console.log(persona.nombre);

//Template Literal Types
type Variantes = "primary" | "secondary" | "danger";
type ClasesCSS = `btn-${Variantes}`;

//let botonPequeño: ClasesCSS = "boton-pequeño"; // Error de tipo
//let botonMediano: ClasesCSS = "boton-mediano";
//let botonMediano: ClasesCSS = "boton-grande"; // Correcto

//Condicionles Types
type EsNumero<T> = T extends number ? true : false;
function esNumero<T>(valor: T): EsNumero<T> {
    return (typeof valor === "number") as EsNumero<T>;
}

const resultado1 = esNumero(123); // true
const resultado2 = esNumero("Hola"); // false

console.log(resultado1);
console.log(resultado2);