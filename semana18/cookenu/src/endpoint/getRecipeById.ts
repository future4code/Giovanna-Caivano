import { Request, Response } from 'express'
import { selectRecipeById } from '../data/selectRecipeById'
import { treatErrorMessage } from '../helpers/treatErrorMsg'
import { AuthenticationData, getTokenData } from '../services/authenticator'
import { Recipe } from '../types'

export const getRecipeById = async (
    req:Request, 
    res: Response
    ) => {
    
    let message:string = 'Recipe found.'
    
    try {
        const recipeId:number = Number(req.params.id)
        const token:string = req.headers.authorization as string
        const tokenData:AuthenticationData = getTokenData(token)

        if(!token || !tokenData){
            res.statusCode = 401
            message = 'Unauthorized.'
            throw new Error(message);
        } else {
            const recipeFound:Recipe[] = await selectRecipeById(recipeId)

            if(!recipeFound.length){
                res.statusCode = 404
                message = 'No recipe found for this ID.'
                throw new Error(message);
            }

            res.send({
                recipe: recipeFound[0]
            })
        }
    } catch (error) {
        treatErrorMessage(error)
        res.status(400).send({
            message: error.message || error.sqlMessage
        })        
    }
}
