import { Request, Response } from 'express'
import { createUserBusiness } from '../business/createUserBusiness'

export const createUser = async (
    req:Request, 
    res:Response
    ) => {
    try {
        const newUserInfo = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }

        const token = await createUserBusiness(newUserInfo)

        res
            .status(201)
            .send({
               message:'User created.',
               token
            })
    } catch (error) {
        res.send({ message: error.message }).status(error.status)
    }
}