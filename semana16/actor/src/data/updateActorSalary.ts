import { connection } from '../index'

export async function updateActorSalary(
    id:string, 
    newSalary: number
    ): Promise<void> {
    try {
        await connection('Actor')
        .where('id', '=', `${id}`)
        .update({
            salary: newSalary
        })

    } catch (error) {
        console.log(error)
    }
}
