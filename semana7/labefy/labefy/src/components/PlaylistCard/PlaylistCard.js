//dependencies
import React from 'react'
import Button from '@material-ui/core/Button';

import { PlaylistCardBox } from '../PlaylistCard/styles.js'

export default function PlaylistCard(props) {
    return(
        <PlaylistCardBox>
            <h4 onClick={() => props.onClickPlaylist(props.id)}>{props.name}</h4>
            <Button variant={"contained"} size={"small"} onClick={() => props.onClickDelete(props.id, props.name)}>apagar</Button>
        </PlaylistCardBox>
        )
}