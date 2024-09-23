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


let test = "1";


if (test === 1) {
    //instrucciones cuando la condición se cumple
    console.log('SE CUMPLIO')
} else {
    //instrucciones cuando la condición NO se cumple   
    console.log('NEL HERMANO')
}
// truthy -> true, 1, "hola"
// falsy -> false, 0, [], null
// nulish -> undefined