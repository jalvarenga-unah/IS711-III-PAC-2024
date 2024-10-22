import express from 'express'
import users from './stores/users.json'  with {type: "json"}

const app = express() // instance de express (createServer)

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


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})