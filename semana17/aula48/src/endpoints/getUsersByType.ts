import { Request, Response } from 'express'
import { selectUsersByType } from '../data/selectUsersByType';
import { User } from '../types';

export const getUsersByType = async (req: Request, res:Response) => {
    const type: string = String(req.params.type)

    try {
        if(!type){
            res.statusCode = 400
            throw new Error("You need to provide a type for your search");
        } else {
            const foundUsers: User[] = await selectUsersByType(type)
            if(!foundUsers.length){
                res.statusCode = 404
                throw new Error("No users found");
            } else {
                res.status(200).send(foundUsers)
            }
        } 

    } catch (error) {
        res.send({
            message: error.message
        })
    }
}