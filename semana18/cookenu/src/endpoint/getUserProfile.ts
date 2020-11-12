import { Request, Response } from 'express'
import { selectUserById } from '../data/selectUserById'
import { AuthenticationData, getTokenData } from '../services/authenticator'
import { User } from '../types'

export const getUserProfile = async (
    req:Request, 
    res:Response) => {
    
        let message:string = 'User found.'

    try {
        const id:string = req.params.id as string
        const token:string = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)

        if(!token || !tokenData){
            res.statusCode = 401
            message = 'Unauthorized.'
            throw new Error(message);
        }
        
        const userData: User[] | undefined = await selectUserById(id) 
        if(!userData){
            res.statusCode = 404
            message = 'User not found.'
            throw new Error (message)
        }

        res.send({
            id: userData[0].id,
            name: userData[0].name,
            email: userData[0].email,
        })
        
    } catch (error) {
        if(error.message === `Cannot read property 'id' of undefined`){
            error.message = 'ID parameter must be provided.'
        }
        if(error.message === `jwt malformed`){
            error.message = 'Invalid token.'
        }
        res.status(400).send({
            message: error.message || error.sqlMessage 
        })
    }
}
