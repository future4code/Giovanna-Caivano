import { Request, Response } from 'express'
import { deleteUser } from '../data/deleteUser'
import { selectUserById } from '../data/selectUserById'
import { AuthenticationData, getTokenData } from '../services/authenticator'
import { USER_ROLE } from '../types'

export const delUser = async (
    req:Request, 
    res:Response
    ) => {
    
        const id: string = req.params.id as string
        const token: string = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)
        let message = 'User successfully deleted.'

        try {

            if(tokenData.role !== USER_ROLE.ADMIN){
                res.statusCode = 401
                message = 'Unauthorized!'
                throw new Error(message);
            }
            
            const targetUserData = await selectUserById(id)

            if(!targetUserData){
                res.statusCode = 404
                message = 'User not found!'
                throw new Error(message);
            }
            
            await deleteUser(id)

            res.send({
                message
            })
        } catch (error) {
            res.status(400).send(error.message || error.sqlMessage)
        }
}
