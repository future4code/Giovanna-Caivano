import { Request, Response } from 'express'
import { selectActorById } from '../data/selectActorById'

export const getActorById = async (req: Request, res: Response) => {
    try {
        const result = await selectActorById(String(req.params.id))
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send('error')
    }
}