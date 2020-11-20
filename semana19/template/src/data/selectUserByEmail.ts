import { User } from '../types'
import { connection } from './connection'

export const selectUserByEmail = async (
    email:string
    ):Promise<User[]> => {
    try {
        return await connection('User_Arq')
        .select('*')
        .where({email})
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
