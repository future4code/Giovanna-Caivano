import { Request, Response } from 'express'
import UserBusiness from '../busines/UserBusiness'
import { CreateUserInput, User } from '../model/User'

class UserController {
    public async signup(
        req:Request,
        res:Response
    ) {
        try {
            const input:CreateUserInput = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const token:string = await UserBusiness.signup(input)

            res
            .status(201)
            .send({
                message: 'Usuário criado.',
                token
            })
        } catch (error) {
            res
            .status(error.statusCode)
            .send({
                message: error.message || error.sqlMessage
            })
        }
    }
}

export default new UserController()
