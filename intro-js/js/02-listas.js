// Listas

const lista = [1, 6, 5, 3, 2, 78, true, "Hola mundo", [1, 2, 3]]

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const copiaNumeros = numeros // se está pasando el valor por referencia

// desestructuracion
const copiaNumeros = [...numeros] // spread operator

// const a = numeros[0]
// const b = numeros[1]
// const c = numeros[2]

const [a, b, c, ...otros] = numeros //rest operator
console.log('variables de la desestructuracion')
console.log(a, b, c)
console.log(otros)

console.log(numeros)
console.log(numeros.pop())// elimina el ultimo elemento y "muta" la variable original
console.log(numeros)
console.log(numeros.shift())
console.log(numeros)

numeros.push(11) // agrega un elemento al final de la lista
console.log(numeros)
numeros.unshift(12)// agrega un elemento al inicio de la lista
console.log(numeros)

numeros.splice(5, 1) // elimina un valor a partir de la posición y cantidad enviada
console.log('original', numeros)
console.log('copia', copiaNumeros)
// lista = 19 ❌ no se puede hacer