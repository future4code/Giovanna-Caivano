import { connection } from '..'
import { User } from '../types'

export const selectUserByEmail = async (
    email:string
    ): Promise<User> => {
    
    try {
        const foundUser = await connection('users')
        .select('*')
        .where({
            email
        })
        return {
            id: foundUser[0].id,
            name: foundUser[0].name,
            email: foundUser[0].email,
            password: foundUser[0].password,
        }
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
