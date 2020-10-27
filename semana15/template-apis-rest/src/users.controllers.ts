import { Request, Response } from 'express' //importanto o express e o type express
import { users, user } from './users'

exports.getAll =(req: Request, res:Response): void => {
    try {
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send({
            message: "Error searching users."
        })
    }
}

exports.getAllByType = (req: Request, res:Response): void => {
    try{
        const response: user[] = users.filter( user => user.type === req.params.type )
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send({
            message: "Error searching for users"
        })
    }
}

exports.getByName =(req: Request, res:Response): void => {
    try {
        const response: user[] = users.filter( user => user.name === req.query.name )
        if(!response){
            throw new Error()
        }
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send({
            message: "Error searching for users."
        })
    }
}

exports.create = (req: Request, res:Response): void => {
    let newUser: user = req.body

    try{
        if(!req.body.id || !req.body.name || !req.body.email || !req.body.type || !req.body.age){
            throw new Error()
        }
        const existingId: user | undefined = users.find( user => user.id === Number(newUser.id))

        if(existingId){
            throw new Error()
        }

        users.push(newUser)

        res.status(200).send({
            message: "User creation successful!",
            "user": { newUser }
        })
    } catch (error) {
        res.status(400).end()
    }
}

exports.fullEdit = (req: Request, res:Response): void => {
    
    try{
        if(!req.params.id || !req.body.name){
            throw new Error()
        }

        const existingId: user | undefined = users.find( user => user.id === Number(req.params.id))

        if(!existingId){
            throw new Error()
        }

        existingId.name = req.body.name


        res.status(200).send({
            message: "User edit successful!",
        })
    } catch (error) {
        res.status(400).end()
    }
}

exports.edit = (req: Request, res:Response): void => {
    try{
        if(!req.params.id || !req.body.name){
            throw new Error()
        }

        const existingId: user | undefined = users.find( user => user.id === Number(req.params.id))

        if(!existingId){
            throw new Error()
        }

        existingId.name = req.body.name


        res.status(200).send({
            message: "User edit successful!",
        })
    } catch (error) {
        res.status(400).end()
    }
}
exports.delete = (req: Request, res:Response): void => {
    try {
        if(!req.params.id){
            throw new Error()
        }

        const userIndex: number = users.findIndex( user => user.id === Number(req.params.id))

        if(userIndex === -1){
            throw new Error()
        }

        users.splice(userIndex, 1)

        res.status(200).send({
            message: "User deleted successfully!",
        })
    } catch (error) {
        res.status(400).send({
            message: "Deletion not successful!"
        })
    }
}