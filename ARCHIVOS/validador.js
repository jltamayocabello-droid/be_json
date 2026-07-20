var jsonData = `{
    "nombre": "Maria",
    "edad": 30,
    "ciudad": "Lima",
    "pais": "Peru"
}`;

try {
    var jsonParse = JSON.parse(jsonData);
    console.log("JSON valido:",jsonParse)
} catch{
    console.error("JSON no valido")
}