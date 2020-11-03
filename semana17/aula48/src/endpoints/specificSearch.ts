import { Request, Response } from 'express'
import selectAllUsers from '../data/selectAllUsers'
import { selectSpecificUsers } from '../data/selectSpecificUsers'
import { SpecificSearch, User } from '../types'

export const specificSearch = async (req: Request, res: Response) => {
    const searchData: SpecificSearch = {
        name: String(req.query.name) || '',
        type: String(req.query.type),
        orderBy: String(req.query.orderBy) || 'name',
        orderType: String(req.query.orderType) || 'DESC',
        page: Number(req.query.page) <= 0 ? Number(req.query.page) : 1
    }

    try {
        const foundUsers: User[] = await selectSpecificUsers(searchData)

        if(!foundUsers.length){
            res.statusCode = 404
            throw new Error("No users found");   
        } else {
            res.status(200).send(foundUsers)
        }
    } catch (error) {
        res.send({
            message: error.message
        })
    }
}