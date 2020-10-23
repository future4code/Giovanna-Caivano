import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { usersAccounts } from './users';
const users = require('./users.controllers')

const app: Express = express()


app.use(express.json())
app.use(cors())

app.post('./accounts/new', users.create)
app.get('./accounts/all', users.getAll)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });