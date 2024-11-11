
import users from '../stores/users.json'  with {type: "json"}
import { validateUserSchema, validatePartialSchema } from '../schemas/users.schema.js'
import crypto from 'node:crypto'
import connection from '../db/connection.js'

export class UserController {


    static getAllUsers(req, res) {
        const consulta = "SELECT user_id,  username,  password_hash,  email,  full_name,  role,  must_change_password,  status,  created_at,  updated_at FROM users"

        try {
            connection.query(consulta, (error, results) => {

                if (error) {
                    return res.status(400).json({
                        error: true,
                        message: "Ocurrió un error al obtener los dato: " + error
                    })
                }
                return res
                    .header('Content-Type', 'application/json')
                    .status(200)
                    .json(results)

            })

        } catch (error) {

            return res.status(400).json({
                error: true,
                message: "Ocurrió un error al obtener los dato"
            })

        }
    }

    static getUserById(req, res) {
        const { user_id } = req.params

        // const user = users.find(user => user.id == id)

        const consulta = `SELECT user_id, username, password_hash, email, full_name, role,
	                    must_change_password, STATUS, created_at, updated_at 
                        FROM users 
                        WHERE user_id = ? `;

        try {

            connection.query(consulta, [user_id], (error, results) => {

                if (error) {
                    return res.status(400).json({
                        error: true,
                        message: "Ocurrió un error al obtener los dato: " + error
                    })
                }

                if (results && results.length === 0) {
                    res
                        .json({
                            message: "Usuario no encontrado"
                        })
                }

                return res
                    .header('Content-Type', 'application/json')
                    .status(200)
                    .json(results)

            })

        } catch (error) {
            return res.status(400).json({
                error: true,
                message: "Ocurrió un error al obtener los dato"
            })

        }

    }

    static createUser(req, res) {

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
    }

    static updateUser(req, res) {

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
    }
}