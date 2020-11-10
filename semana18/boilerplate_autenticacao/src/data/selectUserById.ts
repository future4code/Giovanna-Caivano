import { connection } from '..'
import { User } from '../types'

export const selectUserById = async (
    id: string
): Promise<User> => {
    try {
    const result = await connection('users_aula50')
    .select('*')
    .where({
        id
    })

    return {
        id: result[0].id,
        email: result[0].email,
        password: result[0].password
    }

    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }

}