// objeto / diccionario / Mapa

const persona = {
    nombre: 'Juan',
    edad: 80
}

persona.edad = 20 // asignar un valor a una propiedad

// si una propiedad no existe, se crea
persona.apellido = 'Alvarenga'
persona.direccion = {
    ciudad: 'San Pedro Sula',
    pais: 'Honduras',
    geo: {
        lat: 14.1,
        lng: 87.2
    }
}

// eliminar una propiedad
delete persona.direccion.pais

const clave = 'edad'
const nombre = 'pruebas'

// desestreucuturacion de objetos
const copiaPersona = { ...persona }

// const edad = persona.edad
// const nombre = persona.nombre

// const { nombre: nombrePersona, edad, direccion: { geo: { lat } } } = persona
const { nombre: nombrePersona, edad, direccion } = persona
const { geo } = direccion
const { lat } = geo

console.log(persona)
// console.log(persona['nombre'])
console.log(nombrePersona)
// console.log(persona[clave])
console.log(edad)
console.log(lat)
console.log(persona.direccion.geo.lng)

