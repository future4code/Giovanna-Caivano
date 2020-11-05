import express from "express";
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";
import { createUser } from "./endpoints/createUser";
import { getUserById } from "./endpoints/getUserById";
import { editUser } from "./endpoints/editUser";
import { createTask } from "./endpoints/createTask";
import { getTaskById } from "./endpoints/getTaskById";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getTaskByCreatorId } from "./endpoints/getTaskByCreatorId";

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

const app = express();
app.use(express.json());

app.put('/user', createUser)
app.get('/user/all', getAllUsers)
app.get('/user/:id', getUserById)
app.post('/user/edit/:id', editUser)
app.get('/task', getTaskByCreatorId)
app.put('/task', createTask)
app.get('/task/:id', getTaskById)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
