import React from 'react'
import axios from 'axios'
import { Button } from '@material-ui/core'
import { baseURL, student } from '../../constants/constants'

export function ClearAll () {

    const clearMatches = async () => {
        try{
            await axios.put(`${baseURL}/:${student}/clear`)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Button onClick={clearMatches}>Limpar histórico</Button>
    )
}