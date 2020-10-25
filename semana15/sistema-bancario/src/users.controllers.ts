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
        res.status(errorCode).send({
            message: "Error creating new user!"
        })
    }
}

exports.getAll = (req: Request, res:Response): void => {
    try {
        res.status(200).send(usersAccounts)
    } catch (error) {
        res.status(400).send({
            message: "Error searching users."
        })
    }
}

exports.getByCpf = (req: Request, res:Response): void => {
    let errorCode = 400
    const cpf: any = req.query.cpf

    try {
        if(!cpf || cpf.length < 11) {
            throw new Error("Insert valid parameter")
        }

        const foundAccount: UserAccount | undefined = usersAccounts.find(account => account.cpf === Number(cpf))
        
        if(!foundAccount) {
            errorCode = 404
            throw new Error("Account not found.")
        } else {
            res.status(200).send(foundAccount)
        }
    } catch (error) {
        res.status(errorCode).send({
            message: "Error searching users."
        })
    }
}

exports.deposit = (req: Request, res: Response): void => {
    let errorCode = 400

    try {
        if(!req.body.name || !req.body.cpf || !req.body.ammount) {
            throw new Error("Wrong or missing parameters.")
        }

        const existingAccount: UserAccount | undefined = usersAccounts.find(account => {
            return account.name === req.body.name && account.cpf === Number(req.body.cpf)
        })

        if(!existingAccount){
            errorCode = 404
            throw new Error("Account not found")
        } else {
            existingAccount.accBalance = existingAccount.accBalance + Number(req.body.ammount)
            existingAccount.statement = [...existingAccount.statement, { 
                ammount: Number(req.body.ammount),
                date: Date.now(),
                description: "Depósito de Dinheiro"
            }]
            res.status(200).send({ message: "Deposit executed." })
        }
    } catch (error) {
        res.status(errorCode).end()
    }
}