// Variables Avanzadas en TypeScript
// Tipo Any
// El tipo 'any' permite asignar cualquier tipo de valor a la variable
// Desactiva las verificaciones de tipo para esa variable
let variableAny : any;
//variableAny = "Hola";
variableAny = 123;
// variableAny = true;
console.log("Valor de Variable Any: "+ variableAny);

// Tipo Unknown
// El tipo 'unknown' es similar a 'any', pero es más seguro
// No se puede asignar un valor de tipo 'unknown' a otra variable sin una verificación de tipo
let variableDesconocida : unknown;

//variableDesconocida = "Hola Mundo";
variableDesconocida = 456;
// variableDesconocida = false;
console.log("Valor de Variable Desconocida: "+ variableDesconocida);

if (typeof variableDesconocida === "string") {
    console.log("La variable es una cadena de texto: "+ variableDesconocida.toUpperCase());
}

// Tipo Never
// El tipo 'never' representa valores que nunca ocurren
// Se utiliza en funciones que nunca retornan un valor (por ejemplo, funciones que lanzan errores o tienen bucles infinitos)

/*function throwError(message: string): never {
    throw new Error(message);
}
throwError("Esto es un error");
*/

//Tipo Void
// El tipo 'void' se utiliza para funciones que no retornan ningún valor

function logMessage(message: string): void {
    console.log("Log Mensaje: "+ message);
}
logMessage("Hola, este es un mensaje de log");
