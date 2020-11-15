import { Request, Response } from 'express'
import { insertFollowRelation } from '../data/insertFollowRelation'
import { selectUserById } from '../data/selectUserById'
import { AuthenticationData, getTokenData } from '../services/authenticator'
import { User } from '../types'

export const follow = async (
    req:Request,
    res:Response
    ) => {

    let message:string = 'Followed successfully.'
    const userToFollowId:string = req.body.id as string

    try {
        if(!userToFollowId){
            res.statusCode = 406
            message = 'Missing parameter.'
            throw new Error(message);
        }

        const token:string = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)
        if(!token || !tokenData){
            res.statusCode = 401
            message = 'Unauthorized.'
            throw new Error(message);
        }

        const followerData:User[] | undefined = await selectUserById(tokenData.id)
        const userToFollowData:User[] | undefined = await selectUserById(userToFollowId)
        if(!followerData || !userToFollowData){
            res.statusCode = 404
            message = 'User/s not found.'
            throw new Error (message)
        } else {
            await insertFollowRelation(tokenData.id, userToFollowId)
            res.status(201).send({
                message
            })
        }
    } catch (error) {
        if(error.message === `Cannot read property 'id' of undefined`){
            error.message = 'ID parameter must be provided.'
        }
        if(error.message === `jwt malformed`){
            error.message = 'Invalid token.'
        }
        if(error.message === `jwt must be provided`){
            error.message = 'Unauthorized.'
        }
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}