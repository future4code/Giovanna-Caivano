import knex from "knex";
import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

const users = require('./user.controllers')
const tasks = require('./task.controllers')

dotenv.config();

const connection = knex({   
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

app.put('/user', users.createUser)
app.get('/user/:id', users.getUser)
app.post('/user/edit/:id', users.getUser)
app.put('/task', tasks.createTask)
app.get('/task/:id', users.getTask)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});