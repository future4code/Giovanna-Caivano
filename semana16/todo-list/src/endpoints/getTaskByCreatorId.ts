import { Request, Response } from 'express'
import { searchTaskCreatorById } from '../data/searchTaskCreatorById';

export const getTaskByCreatorId = async (req: Request, res: Response) => {
    const creatorId: number = Number(req.query.creatorUserId)

    try {
        if(!creatorId){
            res.statusCode = 400
            throw new Error("Missing id for search.");
        } else {
            const foundTask = await searchTaskCreatorById(creatorId)
            if(!foundTask){
                res.statusCode = 404
                throw new Error("No task found for this user");
            } else {
                res.status(200).send(foundTask)
            }
        }
    } catch (error) {
        res.send(error.message)
    }
}