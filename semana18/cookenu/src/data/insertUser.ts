import { connection } from '..'
import { User } from '../types'

export const insertUser = async (
    userInfo:User
    ):Promise<void> => {
    
    try {
        await connection('users')
        .insert(userInfo)
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
