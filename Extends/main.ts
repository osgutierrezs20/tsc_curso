let nombre : string = "Juan Arevalo Soto Mayor";
console.log(nombre.length); // 4

function obtenerLongitud<t extends { length: number }>(obt: t): number {
    let longitud: number = obt.length;
    let tipo : string = typeof obt;
    console.log(`El tipo de dato es: ${tipo} y su longitud es: ${longitud}`);
    return obt.length;
}
console.log(obtenerLongitud("Hola Mundo")); // 10
console.log(obtenerLongitud([1,2,3,4,5])); // 5

//No todos tienen la misma extencion de funcionalidad.
//console.log(obtenerLongitud(12345)); // Error