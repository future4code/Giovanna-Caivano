import { updateDeleteUser } from "../data/updateDeleteUser";
import { AuthenticationData, getTokenData } from "../services/authenticator";
import { selectUserById } from '../data/selectUserById'
import { User } from "../types";

export const deleteUserBusiness = async (
    input: {
        token:string,
        id:string
    }) => {
    try {
        const tokenData:AuthenticationData = getTokenData(input.token)
        const user:User[] = await selectUserById(tokenData.id)
        if(user[0].role !== 'ADMIN'){
            console.log(tokenData)
            throw new Error('Only ADMIN users can delete profiles. Please, contact your system admin.');
        } else {
            await updateDeleteUser(input.id)
        }
    } catch (error) {
        throw new Error(error.message || 'Error deleting user.');
    }
}
