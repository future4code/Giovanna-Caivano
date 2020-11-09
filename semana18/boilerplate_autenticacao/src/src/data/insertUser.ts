import { connection } from '../..'

export const insertUser = async (
    id: string,
    email:string,
    password: string
    ):Promise<void> => {
    try {
        await connection('users_aula50')
        .insert({
            id,
            email,
            password
        })
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
