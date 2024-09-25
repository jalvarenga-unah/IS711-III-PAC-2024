// declaración de variables

// el ambito de las variables "var" es global
// ❌ no deberíamos usar la declaración
var nombre = "Juan"

console.log(nombre)

var nombre = "Pedro"
console.log(nombre)

//✅ la forma recomendada

// el ambito es de bloque
// verifican que no esté definida una variable previa con el mismo nombre
let apellido = 'Alvarenga'

apellido = 'Rodas'

console.log(apellido)


const dni = 123123123 // es una constante
// dni = 1354 // ❌ no es válido
console.log(dni)


{

    nombre = 'Julio'
    let apellido = 'Gonzales'
    let dni = 'ABC'
    var rtn = 'DEF'

    console.log('===== nuevo bloque ========')
    console.log(nombre)
    console.log(apellido)
    console.log(dni)
    console.log(rtn)
}

console.log('===== fuera del bloque interno ========')
console.log(nombre)
console.log(apellido)
console.log(dni)
console.log(rtn)



// truthy -> true, 1, "hola"
// falsy -> false, 0, [], null
// nulish -> undefined

let test = '10';

//? typeof test => retorna un string con el tipo de dato
console.log(typeof test)

//la evaluación con "==", hace un "cast" de valores
if (test == 10) {
    //instrucciones cuando la condición se cumple
    console.log('SE CUMPLIO')
} else {
    //instrucciones cuando la condición NO se cumple   
    console.log('NEL HERMANO')
}

// oeprador ternario
const edad = null

console.log(edad ?? 10)
console.log(edad || 20)

// const test2 = edad ?? 0

const esMayor = edad ?? 0 > 18 ? 'Es mayor de edad' : 'Es menor de edad'

console.log(esMayor)