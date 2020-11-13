import { connection } from '..'
import { Recipe } from '../types'

export const selectRecipeById = async (
    id:number
    ): Promise<Recipe[]> => {
    
    try {
        return await connection('recipes')
        .where({
            id
        })
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
