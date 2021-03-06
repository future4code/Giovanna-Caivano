import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { userRouter } from './routes/userRoutes'
import { postRouter } from './routes/postRoutes'

const app:Express = express()

app.use(express.json())
app.use(cors())

app.use('/user', userRouter)
app.use('/post', postRouter)

const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running on http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})
