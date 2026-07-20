// Acceso a datos

let persona =
{
    "nombre": "John Doe",
    "edad": 30,
    "ciudad": "Lima",
    "pais": "Peru",
    // Array
    "colores": ["rojo", "verde", "azul"],
    // Array de objetos
    "equipos_electronicos": [
        {
            "nombre": "Radio",
            "peso": "1 kg"
        },
        {
            "nombre": "Televisor",
            "peso": "2 kg"
        }
    ]
}

// Acceder a los datos
console.log(persona);

// Acceder a los datos desde la variable
let nombre = persona.nombre;
console.log("El nombre es: ", nombre);

// Acceder a los datos de un array
let color = persona.colores[2];
console.log("El color es: ", color);

// Acceder a los datos de un array de objetos
let radio = persona.equipos_electronicos[0];
console.log("El radio pesa: ", radio.peso);