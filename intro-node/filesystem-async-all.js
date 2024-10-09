import { readFile } from 'node:fs/promises'

// Notacion de EMACScript (module)
import users from './stores/users.json' with { type: 'json' };

// Importacion usando CommonJS
// const users = require('./stores/users.json')

Promise.all([
    readFile('./archivo1.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8'),
]).then(([result1, result2]) => {

    console.log(result1)
    console.log(result2)
})

console.log(users[0])


