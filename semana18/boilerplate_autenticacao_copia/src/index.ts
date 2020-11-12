import knex from "knex";
import express, { Express } from "express";
import dotenv from "dotenv";
import cors from 'cors'
import { AddressInfo } from "net";
import { createUser } from "./endpoint/createUser";
import { login } from "./endpoint/login";
import { getUserProfile } from "./endpoint/getUserProfile";
import { delUser } from "./endpoint/deleteUser";

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

const app: Express = express();

app.use(express.json());
app.use(cors())

app.post('/users/signup', createUser)
app.post('/users/login', login)
app.get('/users/profile', getUserProfile)
app.delete('/users/:id', delUser)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
