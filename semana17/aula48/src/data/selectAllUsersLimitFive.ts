import { connection } from '..'

export const selectAllUsersLimitFive = async ():Promise<any> => {
    try {
        return await connection('aula48_exercicio')
        .select('*')
        .limit(5)
        .offset(10)
    } catch (error) {
        throw new Error(error.sqlMessage);
    }
 }
 