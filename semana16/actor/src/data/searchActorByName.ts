import { connection } from '../index'
import { Actor } from '../types'

export async function searchActorByName(
    name:string
    ): Promise<Actor[]> {
        try{
            const result = await connection
                .raw(`
                SELECT * FROM Actor
                WHERE name LIKE "%${name}%"
                `)
                return result[0]
        } catch (error) {
            console.log(error)
            return []
        }
    
}