import { Request, Response } from 'express'
import { AuthenticationData, getTokenData } from '../services/authenticator'
import { selectUserById } from '../data/selectUserById'

export const getUserProfile = async (
    req: Request, 
    res: Response
    ) => {
    
    let message = 'User found!'
    const token: string = req.headers.authorization as string
    const tokenData: AuthenticationData = getTokenData(token)

    try {
    
        const userData = await selectUserById(tokenData.id)

        if(!userData){
            res.statusCode = 404
            message = 'User not found!'
            throw new Error(message);
        }

        res.status(200).send({
            message: {
                id: userData.id,
                email: userData.email
            }
        })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })    
    }
}