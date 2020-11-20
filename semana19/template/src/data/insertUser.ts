import { User } from '../types';
import { connection } from './connection';

export const insertUser = async (
    user:User
    ):Promise<void> => {
    try {
        await connection('User_Arq')
        .insert(
            user
        )
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
