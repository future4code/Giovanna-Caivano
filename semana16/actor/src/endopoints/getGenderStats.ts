import { Request, Response } from 'express'
import { countByGender } from '../data/countByGender'

export const getGenderStats = async (req:Request, res: Response) => {
    const gender = String(req.params.gender)
    
    try {
        const actorsCount: any = await countByGender(gender)

        if(!actorsCount) {
            res.statusCode = 404
            throw new Error("No actors with this gender found")
         }

         res.status(200).send(actorsCount)

    } catch (error) {
        res.send(error.message)
    }
}
