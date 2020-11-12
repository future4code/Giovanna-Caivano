import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import dotenv from 'dotenv'
import knex from 'knex'
import { createUser } from './endpoint/signup'
import { logUser } from './endpoint/login'
import { getOwnProfile } from './endpoint/getOwnProfile'
import { getUserProfile } from './endpoint/getUserProfile'

const app: Express = express()

app.use(express.json())
app.use(cors())

dotenv.config()
export const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME
    }
})

app.post('/signup', createUser)
app.post('/login', logUser)
app.get('/user/profile', getOwnProfile)
app.get('/user/:id', getUserProfile)
app.post('/recipe')
app.get('/recipe/:id')

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}.`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})
