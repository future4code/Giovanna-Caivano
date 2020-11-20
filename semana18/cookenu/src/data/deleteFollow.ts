import { connection } from '../'

export const deleteFollow = async (
    followerId:string,
    followedId:string
    ):Promise<void> => {
    try {
        await connection('users_followers')
        .where({
            follower_user: followerId,
            followed_user: followedId
        })
        .del()
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
}
