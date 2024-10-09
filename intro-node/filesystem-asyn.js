import { readFile } from 'node:fs/promises'


// readFile(path , codificacion)

console.log('leyendo archivo 1...')
const resultArchivo1 = await readFile('./archivo1.txt', 'utf-8')

console.log('Contenido del archivo 1: ', resultArchivo1)

console.log('Haciendo mas cosas')

console.log('leyendo archivo 2...')
const resultArchivo2 = await readFile('./archivo2.txt', 'utf-8')
console.log('Contenido del archivo 2: ', resultArchivo2)

console.log('Fin de las lecturas')