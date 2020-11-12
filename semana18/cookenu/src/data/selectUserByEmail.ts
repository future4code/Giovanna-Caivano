import { connection } from '..'
import { User } from '../types'

export const selectUserByEmail = async (
    email:string
    ): Promise<User[]> => {
    
    try {
        const foundUser:User[] = await connection('users')
        .select('*')
        .where({
            email
        })
        return foundUser
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
