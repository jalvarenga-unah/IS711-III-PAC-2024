
import users from '../stores/users.json'  with {type: "json"}
import { validateUserSchema, validatePartialSchema } from '../schemas/users.schema.js'
import crypto from 'node:crypto'

export class UserController {


    static getAllUsers(req, res) {
        res
            .header('Content-Type', 'application/json')
            .status(200)
            .json(users)
    }

    static getUserById(req, res) {
        const { id } = req.params
        const user = users.find(user => user.id == id)

        if (!user) {
            res
                .json({
                    message: "Usuario no encontrado"
                })
        }

        res.json(user)
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