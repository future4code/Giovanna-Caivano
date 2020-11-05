import { Request, Response } from 'express'
import { updateUser } from '../data/updateUser'

export const editUser = async (req: Request, res: Response) => {
    const id: number = Number(req.params.id)
    const { name, nickname } = req.body

    try {
        if(!id) {
            res.statusCode = 400
            throw new Error("Missing id for search.");
        } else if (!name || typeof name !== 'string') {
            res.statusCode = 400
            throw new Error("Missing or invalid name.");
        } else if (!nickname || typeof nickname !== 'string') {
            res.statusCode = 400
            throw new Error("Missing or invalid nickname.");
        } else {
            await updateUser(id, name, nickname)
            res.status(202).send("User info updated")
        }       
    } catch (error) {
        res.send(error.message)
    }
}
