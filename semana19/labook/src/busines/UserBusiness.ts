import UserDatabase from "../data/UserDatabase";
import { CustomError } from "../errors/CustomError";
import { CreateUserInput, CreateUserOutput, LoginInput, LoginOutput, User } from "../model/User";
import authenticator from "../services/authenticator";
import hashManager from "../services/hashManager";
import idGenerator from "../services/idGenerator";

class UserBusiness {
    public async signup(
        input:CreateUserInput
        ):Promise<CreateUserOutput> {
        try {
            if(!input.name || !input.email || !input.password){
                throw new CustomError(406, 'Preencha os campos "name", "email" e "password".');
            }

            const isExistingUser:User = await UserDatabase.getUserByEmail(input.email)
            if(isExistingUser){
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
            
            return output

        } catch (error) {
            throw new CustomError(400, error.sqlMessage || error.message);
        }
    }

    public async login(
        input:LoginInput
    ):Promise<LoginOutput> {
        try {
            if (!input.email || !input.password){
                throw new CustomError(400, 'Preencha os campos "email" e "password".');
            }

            const isExistingUser:User | null = await UserDatabase.getUserByEmail(input.email)
            if(!isExistingUser){
                throw new CustomError(404, 'Usuário não encontrado.');
            }
            
            const password:string = isExistingUser.getPassword()

            const passwordValid:boolean = await hashManager.compare(input.password, password)
            if(!passwordValid){
                throw new CustomError(401, 'Usuário não autenticado.');
            }

            const output:CreateUserOutput = {
                token: authenticator.generateToken({
                    id: isExistingUser.getId()
                })
            }
            
            return output

        } catch (error) {
            throw new CustomError(400, error.sqlMessage || error.message);
        }
    }
}

export default new UserBusiness()
