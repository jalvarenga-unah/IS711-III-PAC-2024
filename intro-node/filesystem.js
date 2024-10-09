import { readFile } from 'node:fs' //filesystem

console.log('iniciando las lecturas')

// readFile ( path , codificacion, callback ) 
readFile('./archivo1.txt', 'utf-8', (error, content) => {

    if (error) {
        console.log('Ocurrió un problema con la lectura')
        return
    }

    console.log('Contenido del archivo 1: ', content)

})

console.log('Primer archivo leido')

console.log('haciendo mas cosas!')

console.log('Iniciando la lectura del  archivo #2')


readFile('./archivo2.txt', 'utf-8', (error, content) => {

    if (error) {
        console.log('Ocurrió un problema con la lectura')
        return
    }

    console.log('Contenido del archivo 2: ', content)

})

console.log('Fin del archivo #2')


console.log('Fin  de las lecturas')