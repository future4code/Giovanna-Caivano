import {connection} from './index'

export async function findUserById(id: string): Promise<any> {
    const result = await connection.raw(`
        SELECT id, nickname 
        FROM TodoListUser
        WHERE id="${id}"
    `)
    const user = {
        id: result[0][0].id,
        nickname: result[0][0].nickname
    }
    return user
}

export async function findUserByEmail(email: string): Promise<any> {
    const result = await connection.raw(`
        SELECT email 
        FROM TodoListUser
        WHERE email="${email}"
    `)

    return result
}

export async function createUser(name: string, nickname: string, email: string, id: string): Promise<any> {
        await connection.raw(`
            INSERT INTO TodoListUser (id, name, nickname, email)
            VALUES(
            "${id}",
            "${name}",
            "${nickname}",
            "${email}"
        );
    `)

}

export async function getAllUsers(): Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM TodoListUser
    `)
    return result[0]
}

// exports.getUsers = async function (req: Request, res: Response) {
//     try {
//         if (!req.params.id) {
//             msg = "Missing id";
//         } else {
//             const existingUser = findUser(req.params.id);
//             if (existingUser) {
//                 res.status(200).send(existingUser);
//             }
//         }
//     } catch (error) {
//         res.status(errorCode).send(msg);
//     }
// }

// app.post('/user/edit/:id', users.getUser)
// app.put('/task', tasks.createTask)
// app.get('/task/:id', users.getTask)