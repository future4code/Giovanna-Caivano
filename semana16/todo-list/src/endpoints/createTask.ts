import { Request, Response } from 'express'
import {insertTask} from '../data/insertTask'

export const createTask = async (req: Request, res: Response) => {
    const { title, description, limitDate, creatorUserId } = req.body

    try {
        if(!title || !description || !limitDate || !creatorUserId) {
            res.statusCode = 400
            throw new Error("Missing task info.");
        } else {
            await insertTask(title, description, limitDate, creatorUserId)
            res.status(201).send("Task created!")
        }
    } catch (error) {
        res.send(error.message)
    }
}
