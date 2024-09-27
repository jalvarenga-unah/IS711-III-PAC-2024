
// definiendo una función
function saludo() {
    console.log('Hola desde una función')
}

const saludo2 = function () {
    console.log('Hola desde una función')
}

const imprimir = (nombre = '') => {
    console.log('Hola desde una función de flecha ' + nombre)
}

const areaCirculo = (r) => {

    if (!Number(r)) {
        return 0
    }

    return Math.PI * Math.pow(r, 2)
}

const areaCirculo2 = (r) => Math.PI * Math.pow(r, 2)

// llamando a la función
console.log(saludo());

const miFuncion = saludo;

miFuncion()
imprimir('Juan') // <- hace falta el parametro