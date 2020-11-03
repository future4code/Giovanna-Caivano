import { connection } from '..'
import { User } from '../types/User'

export const selectUsersByName = async (
    name:string
    ): Promise<User[]> => {
    try {
        return await connection('aula48_exercicio')
        .where('name', 'LIKE', `%${name}%`)
        .select('*')
    } catch (error) {
        throw new Error(error.sqlMessage);
        
    }
}