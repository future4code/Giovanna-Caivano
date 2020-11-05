import { connection } from '..'

export async function searchUserId(
    id: number
    ): Promise<any> {
    try {
        const result =  await connection('TodoListUser')
        .where('id', id)
        return result[0]
    } catch (error) {
        console.log(error)
    }
}
