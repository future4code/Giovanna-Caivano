import { Request, Response } from 'express'
import { deleteFollow } from '../data/deleteFollow'
import { selectUserById } from '../data/selectUserById'
import { treatErrorMessage } from '../helpers/treatErrorMsg'
import { AuthenticationData, getTokenData } from '../services/authenticator'
import { User } from '../types'

export const unfollow = async (
    req:Request,
    res:Response
    ) => {

    let message:string = 'Unollowed successfully.'
    const userToUnfollowId:string = req.body.userToUnfollowId as string

    try {
        if(!userToUnfollowId){
            res.statusCode = 406
            message = 'Missing parameter.'
            throw new Error(message);
        }

        const token:string = req.headers.authorization as string
        const tokenData:AuthenticationData = getTokenData(token)
        if(!token || !tokenData){
            res.statusCode = 401
            message = 'Unauthorized.'
            throw new Error(message);
        }

        const followerData:User[] | undefined = await selectUserById(tokenData.id)
        const userToUnfollowData:User[] | undefined = await selectUserById(userToUnfollowId)
        if(!followerData || !userToUnfollowData){
            res.statusCode = 404
            message = 'User/s not found.'
            throw new Error (message)
        } else {
            await deleteFollow(tokenData.id, userToUnfollowId)
            res.status(201).send({
                message
            })
        }
    } catch (error) {
        treatErrorMessage(error)
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}
