const postres = [
    {
        nombre: 'Torta de chocolate',
        calorias: 340
    },
    {
        nombre: 'Helado de vainilla',
        calorias: 137
    },
    {
        nombre: 'Gelatina de fresa',
        calorias: 80
    },
    {
        nombre: 'Galletas de chocolate',
        calorias: 200
    },
    {
        nombre: 'Pastel de zanahoria',
        calorias: 250
    },
    {
        nombre: 'Cupcake de chocolate',
        calorias: 150
    },
    {
        nombre: 'Brownie',
        calorias: 300
    },
    {
        nombre: 'Donas',
        calorias: 190
    },
    {
        nombre: 'Churros',
        calorias: 250
    }
]

// filtrar los elementos del arreglo, devolviendo un nuevo arreglo
const postres_filtrados_filter = postres.filter(({ calorias: peligro, nombre }) => {
    return peligro > 100
})

// afectar los elementos del arreglo, pero no modifica el arreglo original
const postres_filtrados_map = postres.map((postre) => {
    return postre.calorias > 100
})


postres.push({
    nombre: 'Tiramisú',
    calorias: 400
})

console.log(postres_filtrados_filter)
console.log(postres_filtrados_map)

const validarPostres = (postres) => {
    return new Promise((resolve, reject) => {

        const condicion = postres.some(({ calorias }) => calorias < 0)

        if (condicion) {
            reject('Hay postres con calorias negativas')
        }

        resolve('Todos los postres tienen calorias positivas')

    })
}