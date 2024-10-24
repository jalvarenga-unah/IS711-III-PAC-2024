import express, { json } from 'express'
import users from './stores/users.json'  with {type: "json"}

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

    const parse_id = Number(id)

    if (!parse_id) {
        res
            .status(400)
            .json({
                message: "El valor del ID no es un número"
            })
    }

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

    res.json(req.body)
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})