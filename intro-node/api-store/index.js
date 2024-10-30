import express, { json } from 'express'
import users from './stores/users.json'  with {type: "json"}
import { validateUserSchema, validatePartialSchema } from './schemas/users.schema.js'
import crypto from 'node:crypto'

const app = express() // instance de express (createServer)

//Middleware
app.disable('x-powered-by')
app.use(json()) //Middleware de express para capturar el body de la petición
// app.use((req, res, next) => {

//     if (req.method != 'POST') next()

//     let body = ''

//     req.on('data', (chunk) => {
//         body += chunk.toString()
//     })

//     req.on('end', () => {
//         req.body = JSON.parse(body)
//         next()
//     })

// })

//TODO: manejo de CORS

const PORT = process.env.PORT || 3000

// Rutas
app.get('/', (req, res) => {
    res.send('Hola desde Express')
})

app.get('/users', (req, res) => {
    res
        .header('Content-Type', 'application/json')
        .status(200)
        .json(users)
})

app.get('/users/:id', (req, res) => {
    const { id } = req.params

    // const parse_id = Number(id)

    // if (!parse_id) {
    //     res
    //         .status(400)
    //         .json({
    //             message: "El valor del ID no es un número"
    //         })
    // }

    const user = users.find(user => user.id == id)

    if (!user) {
        res
            .json({
                message: "Usuario no encontrado"
            })
    }

    res.json(user)

})

app.post('/users', (req, res) => {

    // validar los datos de la peticion

    const data = req.body
    const { success, error } = validateUserSchema(data)

    if (!success) {
        res.status(400).json({
            message: JSON.parse(error.message)
        })
    }


    const id = crypto.randomUUID()

    data.id = id

    //guardar en la BBDD (simulación)
    users.push(data)

    //responder al cliente
    res.status(201)
        .json(req.body)
})


app.patch('/users/:id', (req, res) => {

    const data = req.body
    const { success, error } = validatePartialSchema(data)

    if (!success) {
        res.status(400).json({
            message: JSON.parse(error.message)
        })
    }

    const { id } = req.params

    const userIndex = users.findIndex(user => user.id === id)

    // hago referncia al usuario en el arreglo
    // asignado el mismo objeto, pero ademas, reemplazando con los nuevos datos de la petición
    if (userIndex === -1) {
        res.status(404).json({
            message: "Usuario no encontrado"
        })
    }

    //TODO: actualizar en la BBDD
    users[userIndex] = { ...users[userIndex], ...data } //simulación

    res.json(users[userIndex])
})

app.delete('/users/:id', (req, res) => {
    //.....
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})