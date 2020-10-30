import { Request, Response } from 'express'
import { searchUserId } from '../data/searchUserId';

export const getUserById = async (req: Request, res: Response) => {
    const userId: number = Number(req.params.id)

    try {
        if(!userId) {
            res.statusCode = 400
            throw new Error("Missing id for search.");
        } else {
            const foundUser = await searchUserId(userId)

            if(!foundUser) {
                res.statusCode = 404
                throw new Error("User not found.");
            } 
            res.status(200).send({
                id: foundUser.id,
                nickname: foundUser.nickname
            })
        }
    } catch (error) {
        res.send(error.message)
    }
}
