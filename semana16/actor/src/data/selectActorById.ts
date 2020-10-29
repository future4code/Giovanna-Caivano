import { connection } from '..'

export async function selectActorById(id:string) {
    try {
        return await connection('Actor')
        .where('id', id)
    } catch (error) {
        console.log(error)
    }
}