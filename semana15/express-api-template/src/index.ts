import express, { Express, Request, Response } from 'express' //importanto o express e o type express
import cors from 'cors'
import { countries, country } from './countries'
import { AddressInfo } from 'net'

const app: Express = express()

app.use(express.json()) //converter a resposta no formato .json
app.use(cors())

app.get('/countries/all', (req:Request, res:Response) => {
    res.status(200).send(countries)
})

app.get('/countries/search', (req:Request, res:Response) => {
    let errorCode = 400

    try {
        if(!req.query){
            throw new Error()
        }

        let result: country[] = countries
    
        if(req.query.name) {
            result = result.filter(
                country => country.name.toLowerCase().includes(String(req.query.name).toLowerCase())
            )
        }
        if(req.query.capital) {
            result = result.filter(
                country => country.capital.toLowerCase().includes(String(req.query.capital).toLowerCase())
            )
        }
    
        if(req.query.continent) {
            result = result.filter(
                country => country.continent.toLowerCase().includes(String(req.query.continent).toLowerCase())
            )
        }
    
        res.status(200).send(result)

    } catch (error) {
        res.send(errorCode).end()
    }
})

app.get('/countries/:id', (req:Request, res:Response) => {
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )

    res.status(200).send(result)
})

app.post('/countries/create', (req:Request, res:Response) => {
    let errorCode: number = 400
    let newCountry: country = req.body

    try {

        if(!req.headers.authorization || req.headers.authorization.length < 10 || typeof req.headers.authorization !== 'string'){
            errorCode = 401
            throw new Error()
        } else if(!req.body){
            errorCode = 400
            throw new Error()
        } else {
            const result: country | undefined = countries.find(
                country => country.id === Number(req.body.name)
            )
    
            if(result){
                errorCode = 409
                throw new Error();
            } else {
                newCountry = {...req.body, id: Date.now() }
                countries.push(newCountry)
            }
    
            res.status(200).send({
                "message": "Success!",
                "country":{
                    newCountry
                }
            })
        }

    } catch (error) {
        res.status(errorCode).end()
    }
})

app.put('/countries/edit/:id', (req:Request, res:Response) => {
    let errorCode: number = 400
    try {

        if(!req.headers.authorization || req.headers.authorization.length < 10 || typeof req.headers.authorization !== 'string'){
            errorCode = 401
            throw new Error()
        } else if(!req.params || !req.body){
            errorCode = 400
            throw new Error()
        } else {
            const result: country | undefined = countries.find(
                country => country.id === Number(req.params.id)
            )
    
            if(!result){
                errorCode = 404
                throw new Error();
            } else {
                result.capital = req.body.capital
                result.name = req.body.name
            }
    
            res.status(200).end()
        }

    } catch (error) {
        res.status(errorCode).end()
    }
})

app.delete('/countries/:id', (req:Request, res:Response) => {
    let errorCode: number = 400
    try{
        if(!req.headers.authorization || req.headers.authorization.length < 10 || typeof req.headers.authorization !== 'string'){
            errorCode = 401
            throw new Error()
        } else {
            const countryIndex: number = countries.findIndex(
                country => country.id === Number(req.params.id)
            )
    
            if(countryIndex === -1){
                errorCode = 404
                throw new Error()
            }
            countries.splice(countryIndex, 1)
    
            res.status(200).end()
        }

    } catch (error) {
        res.send(errorCode).end()
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})
