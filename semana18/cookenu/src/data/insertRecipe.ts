import { connection } from '..'
import { Recipe } from '../types'

export const insertRecipe = async (
    recipeInfo: Recipe
    ): Promise<void> => {
    
    try {
        await connection('recipes')
        .insert(recipeInfo)
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}