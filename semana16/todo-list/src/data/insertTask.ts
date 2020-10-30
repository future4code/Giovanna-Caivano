import { connection } from '..'
import { transformDate } from '../helpers'

export async function insertTask(
    title: string,
    description: string,
    limitDate: string,
    creatorUserId: number
): Promise<void> {
    try {
        await connection('TodoListTask')
        .insert({
            title: title, 
            description: description,
            limit_date: transformDate(limitDate),
            creator_user_id: creatorUserId
        })
    } catch (error) {
        console.log(error)
    }
}
