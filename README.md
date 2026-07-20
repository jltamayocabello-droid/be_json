# JSON - Backend Developer

![Estado del Proyecto](https://img.shields.io/badge/Estado-Completado-green)
![JSON Version](https://img.shields.io/badge/JSON-Data%20Format-000000?logo=json&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)
![Python Version](https://img.shields.io/badge/Python-3.10%2B-3776AB?logo=python&logoColor=white)
![Udemy Course](https://img.shields.io/badge/Curso-Backend%20Developer%20(Udemy)-ec1c24?logo=udemy&logoColor=white)

---

## 📖 Descripción del Proyecto
Este repositorio reúne el conjunto de prácticas y ejercicios desarrollados a lo largo de mi aprendizaje sobre el formato de intercambio de datos JSON (JavaScript Object Notation), sus estructuras, tipos de datos, validación sintáctica y de esquemas, y su interacción con lenguajes de programación como JavaScript y Python. Todo el contenido forma parte de mi especialización académica orientada al desarrollo backend:

1. **Curso de Backend Developer (Udemy):** Un recorrido integral por el diseño, estructuración y manipulación de datos en formato JSON. Abarca desde la comprensión de la sintaxis básica, tipos de datos nativos (cadenas, números, booleanos, arreglos, objetos, nulos), anidamiento de estructuras, hasta el consumo y envío de datos JSON en servicios web (APIs REST) y la validación mediante JSON Schema en Python y JavaScript.
2. **Prácticas en Formato JSON (`be_json`):** Conjunto de archivos JSON de ejemplo, scripts de acceso y validación en JavaScript (Node.js) y Python listos para ser ejecutados.

---

## 🎯 Objetivo
Consolidar el dominio técnico en la estructuración, manipulación, consumo y validación del formato JSON bajo estándares profesionales de desarrollo backend, logrando:

- Diseñar y estructurar archivos JSON complejos utilizando objetos anidados y arreglos para representar datos estructurados de manera eficiente.
- Implementar validaciones de datos utilizando JSON Schema para asegurar la integridad de la información recibida o transmitida.
- Acceder, procesar e interpretar datos JSON en entornos de programación con JavaScript y Python.
- Simular la transferencia de datos en servicios API REST utilizando cargas útiles (payloads) en formato JSON.

---

## 🛠️ Requerimientos Técnicos / Temas Cubiertos
Este proyecto cumple con los estándares exigidos para el aprendizaje integral del formato JSON y su uso en el desarrollo backend:

### 1. Sintaxis, Tipos de Datos & Estructuras JSON
- ✅ **Definición y Sintaxis de JSON:** Estructura básica de pares clave-valor y sintaxis de formato de intercambio. Ejemplificado en [definicion.json](./ARCHIVOS/definicion.json).
- ✅ **Tipos de Datos Soportados:** Demostración práctica de todos los tipos de datos válidos en JSON (String, Number, Boolean, Array, Object, Null) en [tipoDatos.json](./ARCHIVOS/tipoDatos.json).
- ✅ **Estructuras de Datos Complejas:** Modelado de arreglos y arreglos de objetos dentro de un archivo JSON para estructurar bases de datos simples, como se muestra en [ObjetosArrays,json](./ARCHIVOS/ObjetosArrays,json).

### 2. Validación de Datos & Esquemas
- ✅ **Validación de Estructura JSON en JS:** Uso del bloque `try-catch` y `JSON.parse()` en JavaScript para verificar si una cadena de texto tiene un formato JSON válido, implementado en [validador.js](./ARCHIVOS/validador.js).
- ✅ **Diseño de JSON Schema:** Creación de esquemas de validación que definen tipos de datos esperados, límites numéricos y propiedades requeridas, documentado en [schemas.json](./ARCHIVOS/schemas.json).
- ✅ **Validación de Esquema con Python:** Integración de la biblioteca `jsonschema` en Python para validar documentos JSON contra un esquema definido, garantizando la consistencia y calidad de los datos, implementado en [schemaspy.py](./ARCHIVOS/schemaspy.py).

### 3. Acceso a Datos & APIs
- ✅ **Acceso a Propiedades en JavaScript:** Lectura de propiedades simples, arrays y objetos anidados en JavaScript, implementado en [AccesoDatos.js](./ARCHIVOS/AccesoDatos.js).
- ✅ **Estructuración de Peticiones API REST:** Ejemplos prácticos de cabeceras (`Content-Type: application/json`) y payloads en formato JSON para endpoints `GET` y `POST` simulados, detallado en [api-md](./ARCHIVOS/api-md).

---

## 📂 Estructura del Proyecto
```
be_json/
│
├── ARCHIVOS/
│   ├── AccesoDatos.js        # Script JS que demuestra el acceso a datos y arreglos de objetos
│   ├── ObjetosArrays,json    # JSON con estructura de empresa, empleados y ubicación
│   ├── api-md                # Simulación de llamadas a una API REST con formato JSON
│   ├── definicion.json       # Ejemplo de JSON con objetos y sub-objetos anidados
│   ├── schemas.json          # Esquema de validación JSON Schema para un objeto de usuario
│   ├── schemaspy.py          # Script de validación en Python usando la librería jsonschema
│   ├── tipoDatos.json        # JSON de muestra con todos los tipos de datos soportados
│   └── validador.js          # Script JS de validación de sintaxis usando JSON.parse
│
└── README.md                 # Documentación del repositorio
```

---

## 🚀 Instrucciones de Ejecución
Para ejecutar o validar los archivos de este repositorio, asegúrate de tener instalado **Node.js** (para los archivos JavaScript) y **Python 3.x** junto con la biblioteca `jsonschema` (para el script Python).

### 1. Clonar el repositorio
```bash
git clone https://github.com/jltamayocabello-droid/be_json.git
cd be_json
```

### 2. Ejecutar Scripts de JavaScript (Node.js)
Puedes correr los scripts de JS directamente utilizando Node.js:
- **Acceso a datos de objetos y arreglos:**
  ```bash
  node ARCHIVOS/AccesoDatos.js
  ```
- **Validación de formato JSON con JSON.parse:**
  ```bash
  node ARCHIVOS/validador.js
  ```

### 3. Ejecutar la Validación de Esquemas con Python
Para correr la validación basada en esquemas utilizando Python:
1. Instala la biblioteca `jsonschema`:
   ```bash
   pip install jsonschema
   ```
2. Ejecuta el script:
   ```bash
   python ARCHIVOS/schemaspy.py
   ```
   Si la validación es correcta, verás el mensaje: `"El documento es válido"`.

---

## 📱 Áreas Técnicas Destacadas
| Área Técnica | Conceptos Clave | Descripción |
| :--- | :--- | :--- |
| 📄 **Formato JSON** | Sintaxis, Clave-Valor | Formato ligero de intercambio de datos estructurados, fácil de leer y escribir por humanos y fácil de interpretar por máquinas. |
| 🗂️ **Estructura de Datos** | Objects, Arrays, Nesting | Representación de datos jerárquicos y complejos utilizando la combinación de colecciones de pares de nombre/valor y listas ordenadas de valores. |
| 🔍 **Validación Sintáctica** | JSON.parse, Try-Catch | Captura de errores al parsear strings en formato JSON en JavaScript para evitar caídas del servidor. |
| 🛡️ **Validación de Esquema** | JSON Schema, jsonschema | Definición de contratos de datos para validar campos requeridos, tipos de variables y rangos permitidos. |
| 🐍 **Integración con Python** | Python Dicts, jsonschema | Carga, manipulación y validación de estructuras JSON desde scripts backend de Python. |
| 🌐 **APIs REST** | GET/POST, Content-Type | Estructuración de peticiones y respuestas con formato JSON en la capa de comunicación de red de servicios API. |

---

## ✒️ Autor
**Jorge Tamayo Cabello**  
*Desarrollador Front-End*

---

## 📄 Licencia
Este repositorio es de carácter estrictamente académico y educativo. Todo el contenido es libre de ser consultado con fines de aprendizaje y referencia técnica.

---

## 🙏 Agradecimientos
- A **Udemy** por la excelente formación en desarrollo de backend mediante el curso de Backend Developer.
- A la **comunidad de desarrollo de software libre** por mantener y estandarizar el formato JSON y la especificación de JSON Schema.
