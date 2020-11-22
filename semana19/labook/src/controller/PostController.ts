import { Request, Response } from 'express'
import PostBusiness from '../busines/PostBusiness'
import UserBusiness from '../busines/UserBusiness'
import { Post, PostInput } from '../model/Posts'
import { AuthenticationData } from '../services/authenticator'

class PostController {
    public async createPost(
        req:Request,
        res:Response
    ) {
        try {
            const token:string = req.headers.authorization as string
            const userAuthorId:AuthenticationData = await UserBusiness.authenticateUser(token)
            const input:PostInput = {
                photo: req.body.photo,
                type: req.body.type,
                description: req.body.description
            }

            const post:Post = await PostBusiness.createPost(input, userAuthorId.id)

            res
            .status(201)
            .send({
                message: "Post criado.",
                post
            })
        } catch (error) {
            res
            .status(error.statusCode)
            .send({
                message: error.message || error.sqlMessage
            })
        }
    }
}

export default new PostController()
