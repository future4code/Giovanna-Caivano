import { connection } from '..'
import { User } from '../types';

export const selectUserById = async (
    id:string
    ):Promise<User[]> => {
    
    try {
     const foundUser:User[] = await connection('users')
     .select('*')
     .where({
         id
     })
     
     return foundUser
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
