import React, { useState } from 'react'
import axios from 'axios'
import { Box, CardMedia, CardContent, Typography, makeStyles, Button } from '@material-ui/core'
import { baseURL, student } from '../../constants/constants'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '60%',
        height: '100%',
        margin: '0 auto',
    },
    media: {
        height: 0,
        paddingTop: '60%'
    }
}))

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

    const sendMatch = async (type) => {
        getNewOption()
        let body
        if(type === "no"){
            body = { id: optionId, choice: false }
        } else if (type === "yes") {
            body = { id: optionId, choice: true }
        }
        try{
            const response = await axios.post(`${baseURL}/:${student}/choose-person`, body, { headers: { "Content-type": "application/json" } })
            console.log(response)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Box className={classes.root}>
            <CardMedia
                className={classes.media}
                image={optionImg}
            />
            <CardContent>
                <Typography>{optionName}, {optionAge}</Typography>
                <Typography>{optionBio}</Typography>
            </CardContent>
            <Box>
                <Button variant="contained" color="secondary" onClick={() => sendMatch("no")}>NÃO</Button>
                <Button variant="contained" color="primary" onClick={() => sendMatch("yes")}>SIM</Button>
            </Box>
        </Box>
    )
}