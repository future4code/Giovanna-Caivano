import { Request, Response } from 'express'
import { insertUser } from '../data/insertUser'
import { generateToken } from '../services/authenticator'
import { hash } from '../services/hashManager'
import generateId from '../services/idGenerator'

export const createUser = async (
    req:Request, 
    res:Response
    ) => {
    
    const { name, email, password } = req.body
    let message:string = 'User created successfully.'

    try {
        if(!name || !email || !password){
            res.statusCode = 400
            message = 'Missing either name and/or email and/or password.'
            throw new Error(message)
        }
        
        if(password.length < 6){
            res.statusCode = 400
            message = 'The password should be at least 6-characters long.'
            throw new Error(message)
        }

        const id:string = generateId()
        const passwordHash:string = await hash(password)
        const userInfo = { 
            ...req.body, 
            id: id, 
            password: passwordHash
        }
        await insertUser(userInfo)
        
        const token:string = generateToken({id})
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
