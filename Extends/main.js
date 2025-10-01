let nombre = "Juan Arevalo Soto Mayor";
console.log(nombre.length); // 4
function obtenerLongitud(obt) {
    let longitud = obt.length;
    let tipo = typeof obt;
    console.log(`El tipo de dato es: ${tipo} y su longitud es: ${longitud}`);
    return obt.length;
}
console.log(obtenerLongitud("Hola Mundo")); // 10
console.log(obtenerLongitud([1, 2, 3, 4, 5])); // 5
export {};
//No todos tienen la misma extencion de funcionalidad.
//console.log(obtenerLongitud(12345)); // Error
//# sourceMappingURL=main.js.map