import { Request, Response } from 'express'
import { selectOrderedUsers } from '../data/selectOrderedUsers'
import { Search } from '../types'
import { User } from '../types'

export const searchUsers = async (req:Request, res: Response) => {
    const searchData: Search = {
        name: String(req.query.name).toLowerCase(),
        type: String(req.query.type)
    }

    const validTypes = ['Teacher',  'Operations', 'CX']

    try {
        if(!validTypes.includes(searchData.type)){
            throw new Error("Type not valid. You should choose from Teacher, Operations or CX");
        }
        const foundUsers: User[] = await selectOrderedUsers(searchData)

        if(!foundUsers.length){
            res.statusCode = 404
            throw new Error("No users found for these search params");
        } else {
            res.status(200).send(foundUsers)
        }
    } catch (error) {
        res.send({
            message: error.message
        })
    }
}