import { Request, Response } from 'express'
import { selectUsersByName } from '../data/selectUsersByName';
import { User } from '../types/User';

export const getUsersByName = async (req:Request, res:Response) => {
    const name:string = String(req.params.name)

    try {
        if(!name) {
            res.statusCode = 400
            throw new Error("You should provide a name.");
        } else {
            const foundUsers: User[] = await selectUsersByName(name)

            if(!foundUsers.length) {
                res.statusCode = 400
                throw new Error("No user found with that name");
            }

            res.status(200).send(foundUsers)
        }
    } catch (error) {
        res.send({
            message: error.message
        })
    }
}