import { Request, Response } from 'express'
import { getAllUsersBusiness } from '../business/getAllUsersBusiness'
import { User } from '../types'

export const getAllUsers = async (
    req:Request,
    res:Response
    ) => {
    try {
        const token:string = req.headers.authorization as string

        const users:User[] = await getAllUsersBusiness(token)

        res.send({
            users
        })
    } catch (error) {
        res.send({ message: error.message }).status(error.status)
    }
}
