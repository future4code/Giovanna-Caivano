import React, { useState, useEffect } from 'react'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core'
import axios from 'axios'
import { baseURL, student } from '../../constants/constants'
import { useStyles } from './styles.js'



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

    useEffect(() => {
        getMatches()
    }, [])

    const classes = useStyles();

    return (
        <List dense className={classes.root}>
      {matchIdArray.map((match) => {
        return (
          <ListItem key={match.id} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar`}
                src={`${match.photo}`}
              />
            </ListItemAvatar>
            <ListItemText id={match.id} primary={`${match.name}`} />
          </ListItem>
        );
      })}
    </List>
        )
    }



    // <div>
    //     {matchIdArray.map(match => {
    //         return <p key={match.id}>{match.name}</p>
    //     })}
    // </div>