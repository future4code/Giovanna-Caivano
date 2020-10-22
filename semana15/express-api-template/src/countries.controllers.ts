import { Request, Response } from 'express' //importanto o express e o type express
import { countries, country } from './countries'


exports.getAll = (req:Request, res:Response) => {
    res.status(200).send(countries)
}

exports.getByQueryParam = (req:Request, res:Response) => {
    let errorCode = 400

    try {
        if(!req.query.name && !req.query.capital && !req.query.continent){
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
}

exports.getById = (req:Request, res:Response) => {
    let errorCode = 400

    try {
        if(!req.params.id){
            throw new Error()
        } else {
            const result: country | undefined = countries.find(
                country => country.id === Number(req.params.id)
            )

            if(!result){
                errorCode = 404
                throw new Error()
            } else {
                res.status(200).send(result)
            }
        }
    } catch (error) {
        res.send(errorCode).end()
    }
}

exports.create = (req:Request, res:Response) => {
    let errorCode: number = 400
    let newCountry: country = req.body

    try {

        if(!req.headers.authorization || req.headers.authorization.length < 10 || typeof req.headers.authorization !== 'string'){
            errorCode = 401
            throw new Error()
        } else if(!req.body.name || !req.body.capital || !req.body.continent){
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
}

exports.edit = (req:Request, res:Response) => {
    let errorCode: number = 400
    try {

        if(!req.headers.authorization || req.headers.authorization.length < 10 || typeof req.headers.authorization !== 'string'){
            errorCode = 401
            throw new Error()
        } 
        
        if(!req.params.id || (!req.body.name && !req.body.capital)){
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
        res.status(errorCode).send()
    }
}

exports.delete = (req:Request, res:Response) => {
    let errorCode: number = 400

    try{

        if(!req.params.id){
            throw new Error()
        }
        
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
}
