import { User } from '../types'
import { connection } from './connection'

export const selectUserById = async (
    id:string
    ):Promise<User[]> => {
    try {
        return await connection('User_Arq')
        .select('*')
        .where({id})
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
