import { Request, Response } from 'express'

let errorCode: number = 400
let msg: string = ""

//será subsitutído pelos dados do banco
type User = {
    name: string,
    nickname: string,
    email: string,
    id: number
}

type Task = {
    title: string,
    description: string,
    limitDate: string
}

const tasks: Task[] = []
const users: User[] = []

exports.createUser = (req: Request, res: Response):void => {
    const { name, nickname, email } = req.body
    const id: number = Date.now()

    try{
        if(!name || typeof name !== 'string'){
            msg = "Name was not provided or is invalid."
            throw new Error();
        } else if(!nickname || typeof nickname !== 'string'){
            msg = "Nickname was not provided or is invalid."
            throw new Error();
        } else if(!email || typeof email !== 'string'){
            msg = "Email was not provided or is invalid."
            throw new Error();
        } else {
            const existingUser: boolean = users.some(user => user.id === id)
            if(existingUser){
                errorCode = 409
                msg = "User already exists."
            } else {

                //adiciona no banco de dados as informações do novo usuário

                msg = "User created!"
                res.status(200).send(msg)
            }
        }

    } catch(error) {
        res.status(errorCode).send(msg)
    }
}

exports.getUser = (req: Request, res: Response):void => {
    try {
        if(!req.params.id){
            msg = "Missing id"
        } else {
            // verifica se existe usuário com esse id no banco, se existir traz o objeto
            const existingUser: boolean = true
            if(existingUser){
                //retorna id e nickname
            }
            res.status(200).send({ id: 1, nickname: "nickname"})
        }
    } catch (error) {
        res.status(errorCode).send(msg)
    }
}

// app.post('/user/edit/:id', users.getUser)
// app.put('/task', tasks.createTask)
// app.get('/task/:id', users.getTask)