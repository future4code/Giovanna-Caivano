import { connection } from '..'

export async function selectCountGender(gender:string) {
    try {
        return await connection('Actor')
        .count('id')
        .where('gender', `${gender}`)
    } catch (error){
        console.log(error)
    }
}
