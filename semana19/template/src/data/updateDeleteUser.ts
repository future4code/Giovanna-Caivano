import { connection } from './connection'

export const updateDeleteUser = async (
    id:string
    ):Promise<void> => {
    try {
        await connection('User_Arq')
        .where({id})
        .update('deleted', true)
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
