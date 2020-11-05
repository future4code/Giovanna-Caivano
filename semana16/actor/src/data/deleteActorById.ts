import { connection } from '..'

export async function deleteActorById(
    id:string
    ): Promise<void> {
    try {
        await connection('Actor')
        .where('id', '=', `${id}`)
        .del()
    } catch (error) {
        console.log(error)
    }
}