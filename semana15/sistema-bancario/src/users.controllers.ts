import { Request, Response } from 'express'
import { UserAccount, usersAccounts } from './users'
import { today, isAdult, getTimeStamp, checkExistingAccount } from './helpers'

let msg: string = ""
let errorCode: number = 400

exports.create = (req: Request, res:Response): void => {
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
            // existingAccount.accBalance = existingAccount.accBalance + Number(req.body.ammount)
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

exports.payment = (req: Request, res: Response): void => {
    let {dueDate, paymentAmmount, paymentDescription, cpf} = req.body
    
    try {
        if(!paymentAmmount || !cpf) {
            msg = "Missing ammount or CPF"
            throw new Error()
        }
        
        if(!dueDate){
            dueDate = today
        } else if(!getTimeStamp(dueDate)){
            msg = "Wrong date format. Please provide a date DD/MM/YYYY"
            throw new Error()
        } else {
            dueDate = getTimeStamp(dueDate)
            if(dueDate < today){
                msg = "This is a past date, you should provide a future date."
                throw new Error()
            }
        }
        
        const existingAccount: UserAccount | undefined = usersAccounts.find(account => {
            return account.cpf === cpf
        })
        
        if(!existingAccount){
            errorCode = 404
            msg = "Account not found"
            throw new Error()
        } else {
            existingAccount.statement = [...existingAccount.statement, { 
                ammount: paymentAmmount,
                date: dueDate,
                description: paymentDescription
            }]
            res.status(200).send("Payment scheduled!")
        }
    } catch (error) {
        res.status(errorCode).send(msg)
    }
}

exports.updateAccBalance = (req: Request, res: Response): void => {
    const cpf: number = Number(req.params.cpf)
    const account: UserAccount | undefined = checkExistingAccount(cpf)

    try{
        if(!account){
            errorCode = 404
            msg = "Account not found"
        } 
        else {
            const transactionsDueToday = account.statement.filter(transaction => {
                return transaction.date <= today
            })
            let newAccBalance: number = account.accBalance

            for(let transaction of transactionsDueToday) {
                newAccBalance = account.accBalance - transaction.ammount
            }
            
            account.accBalance = newAccBalance
            res.status(200).send("Account balance updated")
        }
    } catch (error) {
        res.status(errorCode).send(msg)
    }
}
