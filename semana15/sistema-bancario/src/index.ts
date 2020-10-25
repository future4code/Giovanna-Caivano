import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
const users = require('./users.controllers')

const app: Express = express()


app.use(express.json())
app.use(cors())

app.post('/accounts/new', users.create)
app.get('/accounts/all', users.getAll)
app.get('/accounts/search', users.getByCpf)
app.put('/accounts/deposit', users.deposit)
app.post('/accounts/payment', users.payment)
app.put('/accounts/update/balance/:cpf', users.updateAccBalance)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });