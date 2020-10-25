import { Request, Response } from 'express'
import { UserAccount, usersAccounts } from './users'
import { isAdult, getTimeStamp } from './dateHelpers'

exports.create = (req: Request, res:Response): void => {
    let errorCode: number = 400
    let newUserAccount: UserAccount = req.body
    const canOpenAccount = isAdult(req.body.birthDate) 

    try{
        if(!canOpenAccount){
            errorCode = 401
            throw new Error("User age under 18.")
        } else {
            const existingCpf: boolean = usersAccounts.some(
                user => user.cpf === req.body.cpf
            )
            if(existingCpf){
                errorCode = 409
                throw new Error("There's already an account for that CPF")
            } else {
                const birthDateTimeStamp = getTimeStamp(req.body.birthDate)
                usersAccounts.push({
                    ...newUserAccount,
                    birthDate: birthDateTimeStamp
                })
                res.status(200).send({
                    message: "New user account has been created!"
                })
            }
        }
    } catch (error) {
        res.status(400).send({
            message: "Error creating new user!"
        })
    }
}

exports.getAll =(req: Request, res:Response): void => {
    try {
        res.status(200).send(usersAccounts)
    } catch (error) {
        res.status(400).send({
            message: "Error searching users."
        })
    }
}