import { Request, Response } from 'express'
import { selectAllUsersLimitFive } from '../data/selectAllUsersLimitFive'

export const getAllUsersLimitFive = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsersLimitFive()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }