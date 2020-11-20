import { Request, Response } from 'express'
import UserBusiness from '../busines/UserBusiness'
import { CreateUserInput, CreateUserOutput, LoginInput, LoginOutput, User } from '../model/User'

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

            const token:CreateUserOutput = await UserBusiness.signup(input)

            res
            .status(201)
            .send({
                message: "Usuário criado.",
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

    public async login(
        req:Request,
        res:Response
    ) {
        try {
            const input:LoginInput = {
                email: req.body.email,
                password: req.body.password
            }

            const token:LoginOutput = await UserBusiness.login(input)

            res
            .status(201)
            .send({
                message: "Autorizado.",
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
