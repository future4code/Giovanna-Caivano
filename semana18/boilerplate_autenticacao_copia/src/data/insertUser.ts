import { connection } from '..'
import { USER_ROLE } from '../types';

export const insertUser = async (
    id: string,
    email:string,
    password: string,
    role: USER_ROLE
    ):Promise<void> => {
    try {
        await connection('users_aula50')
        .insert({
            id,
            email,
            password,
            role
        })
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
