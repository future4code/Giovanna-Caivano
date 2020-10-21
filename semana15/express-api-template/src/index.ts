import express, { Express, Request, Response } from 'express' //importanto o express e o type express
import cors from 'cors'
import { AddressInfo } from 'net'

export const app: Express = express()

app.use(express.json()) //converter a resposta no formato .json
app.use(cors())

const countries = require('./countries.controllers')

app.get('/countries/all', countries.getAll)

app.get('/countries/search', countries.getByQueryParam)

app.get('/countries/:id', countries.getById)

app.post('/countries/create', countries.create)

app.put('/countries/edit/:id', countries.edit)

app.delete('/countries/:id', countries.delete)

const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})
