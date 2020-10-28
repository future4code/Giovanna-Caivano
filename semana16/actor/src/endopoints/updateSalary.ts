import {Request, Response} from 'express'
import { updateActorSalary } from '../data/updateActorSalary'

export const updateSalary = async (req: Request, res: Response) => {
    const { id, newSalary } = req.body

    try {
        updateActorSalary(id, newSalary)
        res.status(201).send("Salary updated.")
    } catch (error) {
        console.log(error)
        res.status(400).send("Error")
    }
}
