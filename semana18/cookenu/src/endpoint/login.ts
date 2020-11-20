import { Request, Response } from 'express'
import { selectUserByEmail } from '../data/selectUserByEmail'
import { generateToken } from '../services/authenticator'
import { compare } from '../services/hashManager'
import { User } from '../types'

export const logUser = async (
    req:Request,
    res:Response
    ) => {
    
    const { email, password } = req.body
    let message:string = 'Authorized.'

    try {
        if(!email || !password){
            res.statusCode = 400
            message = 'Missing either email and/or password.'
            throw new Error(message)
        }
        
        const user:User[] | undefined = await selectUserByEmail(email)
        if(!user){
            res.statusCode = 404
            message = 'User not found or wrong password.'
            throw new Error(message)
        }
        
        const passwordIsCorrect:boolean = await compare(password, user[0].password)

        if(!passwordIsCorrect){
            res.statusCode = 401
            message = 'Unauthorized.'
            throw new Error(message)
        }

        const token:string = generateToken({
            id: user[0].id
        })
        res.send({
            message,
            access_token: token
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })        
    }
}