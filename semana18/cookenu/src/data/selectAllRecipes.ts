import { connection } from '../'
import { Recipe } from '../types'

export const selectAllRecipes = async ():Promise<Recipe[]> => {
    try {
        return await connection('recipes')
        .select('*')
        .orderBy('create_date', 'desc')
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
