import { Request, Response } from 'express'
import { deleteUserBusiness } from '../business/deleteUserBusiness'

export const deleteUser = async (
    req:Request,
    res:Response
    ) => {
    try {
        const input = {
            token: req.headers.authorization as string,
            id: req.params.id as string
        }

        await deleteUserBusiness(input)

        res.send({
            message: 'User deleted.'
        })
    } catch (error) {
        res.send({ message: error.message }).status(error.status)
    }
}