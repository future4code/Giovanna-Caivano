import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { insertUser } from '../data/insertUser'
import { User } from "../types";

export const createUserBusiness = async (
        input:any
):Promise<string> => {

    try {
        if(!input.name || !input.email || !input.password || !input.role){
            throw new Error('Please, provide all fields.');
        }
        if(!input.email.includes('@')){
            throw new Error('Invalid email.');
        }
        if(input.password.length < 6){
            throw new Error('Password must be at leart 6-characters long.');
        }

        const id:string = generateId()
        const hashPassword:string = await hash(input.password)

        const userInfo:User = {
            id,
            email: input.email,
            name: input.name,
            password: hashPassword,
            role: input.role
        }
        await insertUser(userInfo)
        const token:string = generateToken({
            id, 
            role: input.role
        })
        return token
    } catch (error) {
        throw new Error(error.message || 'Error creating user.');
    }
}
