import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, CardMedia, CardContent, Typography, Button } from '@material-ui/core'
import { baseURL, student } from '../../constants/constants'
import { useStyles } from './styles.js'

export function MatchBox () {
    const classes = useStyles()
    const [ optionImg, setOptionImg ] = useState('')
    const [ optionBio, setOptionBio ] = useState('')
    const [ optionAge, setOptionAge ] = useState('')
    const [ optionName, setOptionName ] = useState('')
    const [ optionId, setOptionId ] = useState('')


    const getNewOption = async () => {
        try{
            const response = await axios.get(`${baseURL}/:${student}/person`)
            setOptionImg(response.data.profile.photo)
            setOptionBio(response.data.profile.bio)
            setOptionAge(response.data.profile.age)
            setOptionName(response.data.profile.name)
            setOptionId(response.data.profile.id)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getNewOption()
    }, [])

    const sendMatch = async (type) => {
        getNewOption()
        let body
        if(type === "no"){
            body = { id: optionId, choice: false }
        } else if (type === "yes") {
            body = { id: optionId, choice: true }
        }
        try{
            await axios.post(`${baseURL}/:${student}/choose-person`, body, { headers: { "Content-type": "application/json" } })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box className={classes.root}>
            <CardMedia
                component="div"
                className={classes.media}
                image={optionImg}
            />
            <CardContent>
                <Typography variant="h6">{optionName}, {optionAge}</Typography>
                <Typography>{optionBio}</Typography>
            </CardContent>
            <Box>
                <Button variant="contained" color="secondary" onClick={() => sendMatch("no")}>NOPE</Button>
                <Button variant="contained" color="primary" onClick={() => sendMatch("yes")}>OH YES!</Button>
            </Box>
        </Box>
    )
}