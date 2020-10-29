import { Request, Response } from "express";
import { deleteActorById } from '../data/deleteActorById'

export const deleteActor = async (req: Request, res: Response) => {
    const id: string = String(req.params.id)

    try {
        deleteActorById(id)
        res.status(200).send("Actor deleted.")
    } catch (error) {
        res.status(400).send("Error")
    }
}
