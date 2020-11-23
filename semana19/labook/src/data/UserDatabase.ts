import BaseDatabase from "./BaseDatabase";
import { User } from "../model/User";

class UserDatabase extends BaseDatabase {
    private static tableName:string = 'labook_users'

    public getTableName = ():string => UserDatabase.tableName //para usar nos joins

    public async signup(
        user:User
    ):Promise<void> {
        try {
            await BaseDatabase
            .connection(UserDatabase.tableName)
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword()
            })
        } catch (error) {
            throw new Error("Erro de banco de dados" + error.sqlMessage);
        }
    }

    public async getUserByEmail(
        email:string
    ):Promise<User | null> {
        try {
            const result:any[] =  await BaseDatabase
            .connection(UserDatabase.tableName)
            .select('*')
            .where({email})

            if(!result[0]){
                return null             
            }

            return new User(
                result[0].id,
                result[0].name,
                result[0].email,
                result[0].password
            )
        } catch (error) {
            throw new Error(error.sqlMessage);
        }
    }
}

export default new UserDatabase()
