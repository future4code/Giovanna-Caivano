import { connection } from '../'

export const insertFollowRelation = async (
    followerId:string,
    followedId:string
    ):Promise<void> => {
    try {
        await connection('users_followers')
        .insert({
            follower_user: followerId,
            followed_user: followedId
        })
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
}
