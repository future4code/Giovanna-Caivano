import { Request, Response } from 'express'
import { genderStats } from '../data/genderStats'

export const getGenderSalaryStats = async (req:Request, res: Response) => {
    try {
        const result = await genderStats(String(req.params.gender))

        res.status(200).send(result)
    } catch (error) {
        res.status(400).send('Error')
    }
}
