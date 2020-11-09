import  { connection } from '..'
import { Search } from '../types'
import { User } from '../types'

export const selectOrderedUsers = async (data: Search): Promise<User[]> => {
    try {
        return await connection('aula48_exercicio')
        .select('*')
        .where('name',  'like', `%${data.name}%`)  
        .andWhere('type', data.type)  
    } catch (error) {
        throw new Error(error.sqlMessage);
    }
}