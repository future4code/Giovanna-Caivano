import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateToken } from "../services/authenticator";
import { compare } from "../services/hashManager";
import { User } from "../types";

export const logUserBusiness = async (
    input:any
    ) => {
    try {
        if(!input.email || !input.password){
            throw new Error('You must provide both email and password.');
        }
        if(!input.email.includes('@')){
            throw new Error('Invalid email.')
        }

        const user:User[] = await selectUserByEmail(input.email)
        if(!user.length){
            throw new Error('User not found or passoword incorrect.');
        }
        
        const password:boolean = await compare(input.password, user[0].password)
        if(!password){
            throw new Error('User not found or passoword incorrect.');
        }
        
        const token:string = generateToken({
            id: user[0].id, 
            role: input.role
        })
        return token
    } catch (error) {
        throw new Error(error.message || 'Error authenticating user.');
    }
}
