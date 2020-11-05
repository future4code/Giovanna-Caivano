import { connection } from '..'

export async function genderStats(gender:string) {
    try {
        return await connection('Actor')
        .avg('salary')
        .where('gender', '=', `${gender}`)
        .as(`Avg salary for ${gender}`)
    } catch (error) {
        console.log(error)
    }   
}