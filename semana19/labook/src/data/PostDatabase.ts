import BaseDatabase from "./BaseDatabase";
import { Post } from "../model/Posts";

class PostDatabase extends BaseDatabase {
    private static tableName:string = 'labook_posts'
    
    public getTableName = ():string => PostDatabase.tableName //para usar nos joins
    
    public async createPost(
        post:Post
    ):Promise<void> {
        try {
            await BaseDatabase
            .connection(PostDatabase.tableName)
            .insert({
                id: post.getId(),
                photo: post.getPhoto(),
                description: post.getDescription(),
                type: post.getType(),
                author_id: post.getAuthorId()
            })
        } catch (error) {
            throw new Error("Erro de banco de dados" + error.sqlMessage);
        }
    }
}

export default new PostDatabase()