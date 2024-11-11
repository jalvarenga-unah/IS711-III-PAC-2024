import { Router } from 'express'
import { UserController } from '../controllers/user-controller.js'

const userRouter = Router()

// /users
userRouter.get('/', UserController.getAllUsers)

userRouter.get('/:user_id', UserController.getUserById)

userRouter.post('/', UserController.createUser)

userRouter.patch('/:id', UserController.updateUser)

// userRouter.delete('/:id', (req, res) => {
//     //.....
// })

export default userRouter