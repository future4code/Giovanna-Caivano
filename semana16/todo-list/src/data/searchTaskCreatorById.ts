import { connection } from '..'

export async function searchTaskCreatorById(
    creatorUserId:number
    ): Promise<any> {
    try {
        const result = await connection.raw(`
            SELECT 
                tk.id as taskId,
                tk.title as title,
                tk.description as description,
                tk.limit_date as limitDate,
                tk.creator_user_id as creatorUserId,
                tk.status as status,
                us.nickname as creatorUserNickname
            FROM
                TodoListTask tk
                    LEFT JOIN
                        TodoListUser us ON tk.creator_user_id = us.id
                            WHERE tk.id = ${creatorUserId}
        `)

        return result[0]
    } catch (error) {
        console.log(error)
        return []
    }
}