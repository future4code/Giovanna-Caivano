import { Request, Response } from 'express'
import { selectUserById } from '../data/selectUserById'
import { treatErrorMessage } from '../helpers/treatErrorMsg'
import { AuthenticationData, getTokenData } from '../services/authenticator'
import { User } from '../types'

export const getOwnProfile = async (
    req:Request, 
    res:Response
    ) => {
    
    let message:string = 'User found.'
        
    try {
        const token:string = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)
        if(!token || !tokenData){
            res.statusCode = 401
            message = 'Unauthorized.'
            throw new Error(message);
        }

        const userData: User[] | undefined = await selectUserById(tokenData.id) 
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
        treatErrorMessage(error)
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}
