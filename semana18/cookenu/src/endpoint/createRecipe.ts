import { Request, Response } from 'express'
import { insertRecipe } from '../data/insertRecipe'
import { treatErrorMessage } from '../helpers/treatErrorMsg'
import { AuthenticationData, getTokenData } from '../services/authenticator'
import { Recipe } from '../types'

export const createRecipe = async (
    req:Request, 
    res: Response
    ) => {
    
    const { title, description } = req.body
    let message:string = 'Recipe created.'

    
    try{
        const token:string = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)
        if(!token || !tokenData){
            res.statusCode = 401
            message = 'Unauthorized.'
            throw new Error(message);
        }
        
        if(!title || !description){
            res.statusCode = 400
            message = 'Missing either title and/or description.'
            throw new Error(message);
        } else {
            const create_date:Date = new Date()
            const recipe_creator_id:string = tokenData.id
        
            const recipeInfo: Recipe = {
                title,
                description,
                create_date,
                recipe_creator_id
            }
        
            await insertRecipe(recipeInfo)
    
            res.send({
                message
            })
        }
    } catch (error) {
        treatErrorMessage(error)
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}
