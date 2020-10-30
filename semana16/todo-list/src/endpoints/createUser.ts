import { Request, Response } from 'express'
import { insertUser } from '../data/insertUser';

export const createUser = async (req: Request, res: Response) => {
    const { name, nickname, email } = req.body

    try {
        if(!name || typeof name !== 'string'){
            res.statusCode = 400
            throw new Error("Missing or invalid name");
        } else if (!nickname || typeof nickname !== 'string') {
            res.statusCode = 400
            throw new Error("Missing or invalid nickname");
        } else if (!email || typeof email !== 'string') {
            res.statusCode = 400
            throw new Error("Missing or invalid email");
        } else {
            await insertUser(name, nickname, email)
            res.status(201).send("User created!")
        }
    } catch (error) {
        res.send(error.message)
    }
}
