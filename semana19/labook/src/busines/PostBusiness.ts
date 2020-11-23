import PostDatabase from "../data/PostDatabase";
import { CustomError } from "../errors/CustomError";
import { Post, PostInput, PostOutput } from "../model/Posts";
import idGenerator from "../services/idGenerator";

class PostBusiness {
    public async createPost(
        input:PostInput,
        userId:string
    ):Promise<Post>{
        try {
            if (!input.photo || !input.type || !input.description){
                throw new CustomError(400, 'Preencha os campos "photo", "type" e "description".');
            }
    
            const postId:string = idGenerator.generateId()
            const newPost = new Post(
                postId,
                input.photo,
                input.type, 
                input.description,
                userId
            )
    
            await PostDatabase.createPost(newPost)
    
            return newPost
        } catch (error) {
            throw new CustomError(400, error.sqlMessage || error.message);
        }

    }
}

export default new PostBusiness()