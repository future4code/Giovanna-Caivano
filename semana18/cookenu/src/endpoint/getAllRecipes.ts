import { Request, Response } from 'express'
import { selectAllRecipes } from '../data/selectAllRecipes'
import { selectUserById } from '../data/selectUserById'
import { AuthenticationData, getTokenData } from '../services/authenticator'
import { Recipe, User } from '../types'

export const getAllRecipes = async (
    req:Request,
    res:Response
    ) => {

    let message:string = ''
    
    try {
        const token:string = req.headers.authorization as string
        const tokenData:AuthenticationData = getTokenData(token)
        if(!token || !tokenData){
            res.statusCode = 401
            message = 'Unauthorized.'
            throw new Error(message);
        }

        const userData: User[] | undefined = await selectUserById(tokenData.id) 
        if(!userData){
            res.statusCode = 404
            message = 'User not found.'
            throw new Error (message)
        } else {
            const recipes:Recipe[] | undefined = await selectAllRecipes()
            res.send({
                recipes
            })
        }
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}
