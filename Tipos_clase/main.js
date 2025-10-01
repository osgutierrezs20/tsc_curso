import { Empleado } from "./empleado.js";
let empleado = new Empleado("Luis", 30, true, "Ingeniero de Software");
console.log(empleado.saludar());
console.log(empleado.obtenerInfo());
console.log("Nombre: ", empleado.nombre); // Acceso permitido (público)
//# sourceMappingURL=main.js.map