import express, { Express } from 'express'
import knex from 'knex'
import cors from 'cors'
import dotenv from 'dotenv'
import { AddressInfo } from 'net'
import { getAllUsers } from './endpoints/getAllUsers'
import { getAllUsersLimitFive } from './endpoints/getAllUsersLimitFive'
import { getUsersByName } from './endpoints/getUsersByName'
import { getUsersByType } from './endpoints/getUsersByType'
import { searchUsers } from './endpoints/searchUsers'
import { specificSearch } from './endpoints/specificSearch'

dotenv.config()

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

const app: Express = express()
app.use(express.json())
app.use(cors())

app.get('/users', getAllUsers)
app.get('/users/name/:name', getUsersByName)
app.get('/users/type/:type', getUsersByType)
app.get('/users/search', searchUsers)
app.get('/users/limitfive', getAllUsersLimitFive)
app.get('/users/search/specific', specificSearch)

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running on port ${address.port}`)
    } else {
        console.log(`Failure to load server`)
    }
})
