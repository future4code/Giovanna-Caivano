import { Request, Response } from 'express'
import { generateToken } from '../services/authenticator'
import generateId from '../services/idGenerator'
import { insertUser } from '../data/insertUser'
import { hash } from '../services/hashManager'

export const createUser = async (
    req:Request, 
    res: Response
    ) => {
    
    const { email, password, role } = req.body
    let message = 'Token has been generated by jwt.'
    
    try {
        if(!email || !password || !email.includes('@')) {
            res.statusCode = 406
            message = 'Missing "name" and/or "password" or "email" and/or "password" are not valid.'
            throw new Error(message);
        }
        if(password.lenght < 6){
            message = 'Password should be at least 6-character long.'
            throw new Error(message);    
        }
        
        const id: string = generateId()
        const passwordHash: string = await hash(password)
        
        await insertUser(
            id,
            email,
            passwordHash,
            role
        )

        const token: string = generateToken({
            id,
            role,
        })
            
        res.status(201).send({
            message: message,
            token: token
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}
