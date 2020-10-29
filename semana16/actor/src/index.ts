import express, { Express } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import knex from 'knex'
import { AddressInfo } from 'net'
import { getActorByName } from './endopoints/getActorByName'
import { getGenderStats } from './endopoints/getGenderStats'
import { updateSalary } from './endopoints/updateSalary'
import { deleteActor } from './endopoints/deleteActor'
import { getGenderSalaryStats } from './endopoints/getGenderSalaryStats'

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
app.put('/actors/update/salary', updateSalary)
app.delete('/actors/delete/:id', deleteActor)
app.get('/actors/stats/salary/:gender', getGenderSalaryStats)

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running in https://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})