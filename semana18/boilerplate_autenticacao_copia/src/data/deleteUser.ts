import { connection } from '..'

export const deleteUser = async (
    id:string
    ): Promise<void> => {
    
        try {
            await connection('users_aula50')
            .where('id', id)
            .del()
        } catch (error) {
            throw new Error(error.message || error.sqlMessage);
        }
}
