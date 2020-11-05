import { connection } from '..'

export async function updateUser(
    id: number, 
    name: string, 
    nickname: string
    ): Promise<void> {
    try {
        await connection('TodoListUser')
        .where('id', id)
        .update({
            name: name,
            nickname: nickname
        })
    } catch (error) {
        console.log(error)
    }
}
