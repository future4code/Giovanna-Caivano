import { getTokenData } from "../services/authenticator";
import { selectAllUsers } from "../data/selectAllUsers";
import { User } from "../types";

export const getAllUsersBusiness = async (token:string):Promise<User[]> => {
    try {
        getTokenData(token)

        return await selectAllUsers()
    } catch (error) {
        throw new Error(error.message || 'Error retrieving users.');
    }    
}
