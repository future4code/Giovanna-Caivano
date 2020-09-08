import React, { useState } from 'react'
import axios from 'axios'
import { Button } from '@material-ui/core'
import { baseURL, student } from '../../constants/constants'

export function MatchList () {
    const [ matchIdArray, setMatchIdArray ] = useState([])

    const getMatches = async () => {
        try{
            const response = await axios.get(`${baseURL}/:${student}/matches`)
            setMatchIdArray(response.data.matches)
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div>
            <Button onClick={getMatches}>mostrar lista</Button>
            {matchIdArray.map(match => {
                return <p key={match.id}>{match.name}</p>
            })}
        </div>
    )
}