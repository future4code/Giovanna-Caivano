import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";
import { createUser, findUserById } from "./user.controllers";

dotenv.config();

export const connection = knex({   
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

let errorCode: number = 400
let msg: string = ""

const app = express();
app.use(express.json());

app.put('/user', (req: Request, res: Response):void => {
  const { name, nickname, email } = req.body

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
          // const existingUser: any = findUserByEmail(email)
          // console.log(existingUser)
          // if(existingUser){
          //     errorCode = 409
          //     msg = "User already exists."
          // } else {
              const id: string = String(Date.now())
              createUser(name, nickname, email, id)
              msg = "User created!"
              res.status(200).send({ 
                message: msg, 
                response: { 
                  name: name,
                  nickname: nickname,
                  email: email,
                  id: id
                 }
              })
          }
      // }

  } catch(error) {
      res.status(errorCode).send(msg)
  }
})

app.get('/user/:id', (req: Request, res: Response):void => {
  try{
    if(!req.params.id){
      msg = "Please, provide an ID for the search"
      throw new Error();
    } else {
      const user = findUserById(req.params.id)
      msg = "User found"
      res.status(200).send(msg)
    }
  } catch (error) {
    res.status(400).send(msg)
  }
})

// app.post('/user/edit/:id', users.getUser)
// app.put('/task', tasks.createTask)
// app.get('/task/:id', users.getTask)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.get('/', testEndpoint)

async function testEndpoint(req:Request, res:Response): Promise<void>{
  try {
    const result = await connection.raw(`
      SELECT * FROM Actor
    `)

    res.status(200).send(result[0])
  } catch (error) {
    res.status(400).send(error.message)
  }
}
