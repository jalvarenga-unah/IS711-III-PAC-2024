import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    port: 8889, // reemplazar con el puerto de la base de datos
    user: 'root', // reemplazar con el usuario de la base de datos
    password: 'root', // contraseña del usuario de la base de datos
    database: 'store', // reemplazar con el nombre de la base de datos
})

connection.connect((error) => {

    if (error) {
        throw new Error('El error de conexión es: ', error)
    }

})

export default connection;