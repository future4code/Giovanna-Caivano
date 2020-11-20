import { connect } from 'http2'
import { User } from '../types'
import { connection } from './connection'

export const selectAllUsers = async ():Promise<User[]> => {
    try {
        return await connection('User_Arq')
        .select('*')
        .where('deleted', false)
    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}
