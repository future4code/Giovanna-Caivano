import express, { Express } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import knex from 'knex'
import { AddressInfo } from 'net'
import { getActorByName } from './endopoints/getActorByName'
import { getGenderStats } from './endopoints/getGenderStats'

dotenv.config()

const app: Express = express()

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

app.use(express.json())
app.use(cors())

app.get('/actors/search', getActorByName)
app.get('/actors/:gender', getGenderStats)

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running in https://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})