import { connection } from '..'

export async function selectAllUsers(): Promise<any> {
    try {
        return await connection('TodoListUser')
        .select('id', 'nickname')
        
    } catch (error) {
        return []
    }
}