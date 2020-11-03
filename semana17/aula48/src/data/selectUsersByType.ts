import { connection } from '..'
import { User } from '../types/User'

export const selectUsersByType = async (type:string): Promise<User[]> => {
    try {
        return await connection('aula48_exercicio')
        .where('type', type)
        .select('*')
    } catch (error) {
        throw new Error(error.sqlMessage);
    }
}
