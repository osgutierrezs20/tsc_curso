// Parámetros opcionales
function saludar(nombre: string, saludo? : string): string {
    if (saludo) {
        return `${saludo}, ${nombre}!`;
    } else {
        return `Hola, ${nombre}!`;
    }   
}

console.log(saludar("Ana")); // Usa el saludo por defecto
console.log(saludar("Luis", "Buenos días")); // Usa un saludo personalizado

// Parámetros multiples 
function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((acumulador, actual) => acumulador + actual, 0);
}
console.log("Resultado de sumar todos: ", sumarTodos(1, 2, 3, 4, 5)); // 15

//Valores por defecto
function despedir(nombre: string, despedida: string = "Adiós"): string { // Valor por defecto "Adiós"
    return `${despedida}, ${nombre}!`;
}   
console.log(despedir("Oscar")); // Usa el valor por defecto
console.log(despedir("Oscar", "Hasta luego, xao")); // Usa un valor personalizado
