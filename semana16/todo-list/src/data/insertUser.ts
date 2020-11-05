import { connection } from '..'

export async function insertUser(
    name: string, 
    nickname:string, 
    email: string
    ): Promise<void> {
    try {
        await connection('TodoListUser')
        .insert({
            name: name,
            nickname: nickname,
            email: email
        })
    } catch (error) {
        console.log(error)
    }
}
