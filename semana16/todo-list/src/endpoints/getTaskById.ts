import { Request, Response } from 'express'
import { searchTaskId } from '../data/searchTaskId';

export const getTaskById = async (req: Request, res: Response) => {
    const taskId: number = Number(req.params.id)

    try {
        if(!taskId){
            res.statusCode = 400
            throw new Error("Missing id for search.");
        } else {
            const foundTask = await searchTaskId(taskId)
            if(!foundTask) {
                res.statusCode = 404
                throw new Error("Task not found");
            } else {
                res.status(200).send(foundTask)
            }
        }
    } catch (error) {
        res.send(error.message)
    }
}