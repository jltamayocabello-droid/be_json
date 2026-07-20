import jsonschema

documento_json = {
    "nombre": "John Doe",
    "edad": 30,
    "active": True
}

esquema_json = {
    "type": "object",
    "properties":{
        "nombre": {"type": "string"},
        "edad": {"type": "integer"},
        "active": {"type": "boolean"}
    },
    "required": ["nombre", "edad"]
}
try:
    jsonschema.validate(documento_json, esquema_json)
    print("El documento es válido")
except jsonschema.exceptions.ValidationError as e:
    print(f"El documento no es válido: {e}")
