import http from 'node:http'

// establecer un puerto

const PORT = process.env.PORT || 3000

//crear el servidor

const app = http.createServer((request, response) => {

    // TODO: 
    //Manejo de metodos de peticion
    // codigos de respuestas
    // encabezados de la respuesta



    //en funcion de lo que el cliente solicite, se da una respuesta
    console.log('Holaaa desde el servidor')
    response.end('Hola mundo!!') //servirle el contenido al cliente

})

//escuchar el puerto

// si para "0" al puerto, el sistema operativo asigna un puerto disponible
// app.listen(0, () => {

//     const PORT = app.address().port

//     console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`)
// })
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`)
})

//* node --watch index.js -> para que se actualice automaticamente al hacer cambios