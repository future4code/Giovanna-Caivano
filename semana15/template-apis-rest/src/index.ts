import express from 'express';
import cors from 'cors';
import { AddressInfo } from "net";

export const app = express();

app.use(express.json());
app.use(cors());

const users = require('./users.controllers')

app.get('/users', users.getAll)
app.get('/users/:type', users.getAllByType)
app.get('/users/query', users.getByName)
app.post('/users/create', users.create)
app.put('/users/fulledit/:id', users.fullEdit)
app.patch('/users/edit/:id', users.edit)
app.delete('/users/:id', users.delete)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
