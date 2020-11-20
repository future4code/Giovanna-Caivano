import { User } from "../model/User";
import BaseDatabase from "./BaseDatabase";

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
    ):Promise<User[]> {
        try {
            return await BaseDatabase
            .connection(UserDatabase.tableName)
            .select('*')
            .where({email})
        } catch (error) {
            throw new Error("Erro de banco de dados" + error.sqlMessage);
        }
    }
}

export default new UserDatabase()
