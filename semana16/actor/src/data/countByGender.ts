import { connection } from '../index'

export async function countByGender(
    gender:string
    ): Promise<any> {
        try{
            const result = await connection
                .raw(`
                SELECT COUNT(*) FROM Actor
                WHERE gender = "${gender}"
                `)
                return result[0]
        } catch (error) {
            console.log(error)
            return []
        } 
}
