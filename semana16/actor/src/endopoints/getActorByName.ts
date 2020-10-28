import { Request, Response } from 'express'
import { searchActorByName } from '../data/searchActorByName'
import { Actor } from '../types'

export const getActorByName = async (req:Request, res: Response) => {
    const name = String(req.query.name)
    
    try {
        const actors: Actor[] = await searchActorByName(name)

        if(!actors.length) {
            res.statusCode = 404
            throw new Error("No actors found")
         }

         res.status(200).send(actors)

    } catch (error) {
        res.send(error.message)
    }
}
