import { Request, Response } from 'express'
import { selectCountGender } from '../data/selectCountGender'

export const getActorsByGender = async (req: Request, res: Response) => {
    const gender:string = String(req.query.gender)
    try {
        const result  = await selectCountGender(gender)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
