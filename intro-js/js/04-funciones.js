
// definiendo una función
function saludo() {
    console.log('Hola desde una función');
}

const saludo2 = function () {

    console.log('Hola desde una función');
}

// llamando a la función
console.log(saludo());

const miFuncion = saludo;

miFuncion()