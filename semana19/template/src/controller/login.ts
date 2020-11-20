import { Request, Response } from 'express'
import { logUserBusiness } from '../business/logUserBusiness'

export const login = async (
    req:Request,
    res:Response
    ) => {
    try {
        const loginInfo = {
            email: req.body.email,
            password: req.body.password
        }
        const token:string = await logUserBusiness(loginInfo)

        res
            .status(200)
            .send({
                token
            })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}
