// Acceso a datos

let persona =
{
    "nombre": "John Doe",
    "edad": 30,
    "ciudad": "Lima",
    "pais": "Peru",
    "colores": ["rojo", "verde", "azul"]
}

// Acceder a los datos
console.log(persona);

// Acceder a los datos desde la variable
let nombre = persona.nombre;
console.log("El nombre es: ", nombre);

// Acceder a los datos de un array
let color = persona.colores[2];
console.log("El color es: ", color);