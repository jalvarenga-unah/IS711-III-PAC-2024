import http from 'node:http'
import users from './stores/users.json' with { type: 'json' };

// establecer un puerto

const PORT = process.env.PORT || 3000

//crear el servidor

//req,res
const app = http.createServer((request, response) => {

    // TODO: 
    //Manejo de metodos (Verbos) de peticion

    const { method, url } = request

    switch (method) {
        case 'GET':

            switch (url) {
                case '/users':
                    response.statusCode = 200 // Es por defecto si no se pone
                    response.setHeader('Content-Type', 'application/json')
                    response.end(JSON.stringify(users))
                    break
                default:
                    response.end('Soy una peticion GET')
            }
            break
        case 'POST':

            // 1. obtener la información enviada
            // request.body
            // Para cada petición
            let body = ''

            // listener para el evento 'data'
            request.on('data', (chunck) => {
                body += chunck.toString()
            })

            request.on('end', () => {
                console.log(body)
                body = JSON.parse(body)
            })

            if (body["nombre"].length < 3) {
                response.statusCode = 400
                response.end('El nombre debe tener al menos 3 caracteres')
                return

            }

            // 2. procesar la información (validar que sea como esperamos que sea)





            // 3. guardar la información (inserts en las BBDDD)
            // 4. dar una respuesta al cliente

            // response.end('Soy una peticion POST')
            break
        default:
            response.end('Soy una peticion que no es GET ni POST')
            break
    }





    // codigos de respuestas
    // encabezados de la respuesta



    //en funcion de lo que el cliente solicite, se da una respuesta
    // console.log('Holaaa desde el servidor')
    // response.end('Hola mundo!!') //servirle el contenido al cliente

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