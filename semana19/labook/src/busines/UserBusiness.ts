import UserDatabase from "../data/UserDatabase";
import { CustomError } from "../errors/CustomError";
import { CreateUserInput, CreateUserOutput, User } from "../model/User";
import authenticator from "../services/authenticator";
import hashManager from "../services/hashManager";
import idGenerator from "../services/idGenerator";

class UserBusiness {
    public async signup(
        input:CreateUserInput
        ):Promise<string> {
        try {
            if(!input.name || !input.email || !input.password){
                throw new CustomError(406, 'Preencha os campos "name", "email" e "password".');
            }

            const isExistingUser:User[] = await UserDatabase.getUserByEmail(input.email)
            if(isExistingUser.length > 0){
                throw new CustomError(409, 'E-mail já cadastrado.');
            }

            const id:string = idGenerator.generateId()
            const cypherPassword:string = await hashManager.hash(input.password)
            const newUser:User = new User(
                id,
                input.name,
                input.email,
                cypherPassword
            )

            await UserDatabase.signup(newUser)

            const output:CreateUserOutput = {
                token: authenticator.generateToken({id})
            }
            
            return output.token

        } catch (error) {
            throw new CustomError(400, error.sqlMessage || error.message);
        }
    }
}

export default new UserBusiness()
