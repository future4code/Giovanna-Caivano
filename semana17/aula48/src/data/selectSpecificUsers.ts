import { connection } from "..";
import { SpecificSearch, User } from "../types";

export const selectSpecificUsers = async (data: SpecificSearch): Promise<User[]> => {
    try {
        const resultsPerPage: number = 5
        const offset: number = resultsPerPage * (data.page - 1)

        return await connection('aula48_exercicio')
        .where('name',  'like', `%${data.name}%`)  
        .orWhere('type', data.type)
        .orderBy(`${data.orderBy}`, `${data.orderType}`)
        .limit(resultsPerPage)
        .offset(offset)
         
    } catch (error) {
        throw new Error(error.sqlMessage);
    }
}