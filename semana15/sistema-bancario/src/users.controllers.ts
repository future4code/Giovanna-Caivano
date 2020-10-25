import { Request, Response } from 'express'
import { UserAccount, Transaction, usersAccounts } from './users'
import { today, isAdult, getTimeStamp, checkExistingAccount } from './helpers'

let msg: string = ""
let errorCode: number = 400

exports.create = (req: Request, res:Response): void => {
    let newUserAccount: UserAccount = req.body
    const canOpenAccount: boolean = isAdult(req.body.birthDate) 

    try{
        if(!canOpenAccount){
            errorCode = 401
            msg = "User age under 18."
            throw new Error()
        } else {
            const existingCpf: boolean = usersAccounts.some(
                user => user.cpf === req.body.cpf
            )
            if(existingCpf){
                errorCode = 409
                msg = "There's already an account for that CPF."
                throw new Error()
            } else {
                usersAccounts.push({
                    ...newUserAccount,
                    birthDate: getTimeStamp(req.body.birthDate)
                })
                res.status(200).send("New user account has been created!")
            }
        }
    } catch (error) {
        res.status(errorCode).send(msg)
    }
}

exports.getAll = (req: Request, res:Response): void => {
    try {
        res.status(200).send(usersAccounts)
    } catch (error) {
        res.status(400).send("Error searching users.")
    }
}

exports.getByCpf = (req: Request, res:Response): void => {
    const cpf: number = Number(req.query.cpf)

    try {
        if(!cpf || cpf < 99999999999) {
            msg = "Insert valid parameter"
            throw new Error()
        }

        const existingAccount: UserAccount | undefined = checkExistingAccount(cpf)

        if(!existingAccount) {
            errorCode = 404
            msg = "Account not found."
            throw new Error()
        } else {
            res.status(200).send(existingAccount)
        }
    } catch (error) {
        res.status(errorCode).send(msg)
    }
}

exports.deposit = (req: Request, res: Response): void => {
    try {
        if(!req.body.name || !req.body.cpf || !req.body.ammount) {
            msg = "Wrong or missing parameters."
            throw new Error()
        }

        const existingAccount: UserAccount | undefined = checkExistingAccount(req.body.cpf, req.body.name)

        if(!existingAccount){
            errorCode = 404
            msg = "Account not found"
            throw new Error()
        } else {
            existingAccount.statement = [...existingAccount.statement, { 
                ammount: Number(req.body.ammount),
                date: Date.now(),
                description: "Depósito de Dinheiro"
            }]
            res.status(200).send("Deposit executed.")
        }
    } catch (error) {
        res.status(errorCode).send(msg)
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
        
        const existingAccount: UserAccount | undefined = checkExistingAccount(Number(cpf))
        
        if(!existingAccount){
            errorCode = 404
            msg = "Account not found"
            throw new Error()
        } else if (existingAccount.accBalance < Number(paymentAmmount)) {
            msg = "Not enough balance."
            throw new Error();
            
        } else {
            existingAccount.statement = [...existingAccount.statement, { 
                ammount: Number(-paymentAmmount),
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
            throw new Error();
            
        } 
        else {
            const transactionsDueToday: Transaction[] | undefined = account.statement.filter(transaction => {
                return transaction.date <= today
            })
            let newAccBalance: number = account.accBalance

            for(let transaction of transactionsDueToday) {
                newAccBalance = account.accBalance + transaction.ammount
            }
            
            account.accBalance = newAccBalance
            res.status(200).send("Account balance updated")
        }
    } catch (error) {
        res.status(errorCode).send(msg)
    }
}

exports.wiretransfer= (req: Request, res: Response): void => {
    const { senderName, senderCpf, recipientName, recipientCpf, ammount  } = req.body
    const senderAccount: UserAccount | undefined = checkExistingAccount(senderCpf)
    const recipientAccount: UserAccount | undefined = checkExistingAccount(recipientCpf)

    try {
        if( !senderCpf || !senderName || !recipientCpf || !recipientName || !ammount){
            msg = "Parameter(s) missing."
            throw new Error();
        } else if(!senderAccount){
            msg = "Sender account not found"
            throw new Error();
        } else if (!recipientAccount){
            msg = "Recipient account not found"
            throw new Error();
        } else if(senderAccount.accBalance < Number(ammount)) {
            msg = "Not enough balance"
            throw new Error();
        } else {
            senderAccount.statement = [...senderAccount.statement, {
                ammount: Number(-ammount),
                date: today,
                description: `Transferência para ${recipientName}`
            }]
            recipientAccount.statement = [...recipientAccount.statement, {
                ammount: Number(ammount),
                date: today,
                description: `Transferência de ${senderName}`
            }]
            res.status(200).send("Funds transfered succssfully!")
        }

    } catch (error) {
        res.status(errorCode).send(msg)
    }
}