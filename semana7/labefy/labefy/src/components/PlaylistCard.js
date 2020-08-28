//dependencies
import React from 'react'
import Axios from 'axios'

//styles
import { SmallButton } from './styles'

const baseURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/'
const credentials = 'giovanna-caivano-jackson'


export default function PlaylistCard(props) {
    const removePlaylist = async (id, name) => {
        try{
            await Axios.delete(`${baseURL}playlists/${id}`, { 
                headers: { 
                    Authorization: credentials 
                }
            })
            alert(`Playlist ${name} apagada com sucesso!`)
        }catch(error){ 
            console.log(error)
        }
    }

    return(
        <div>
            <span onClick={() => props.onClickPlaylist(props.id)}>{props.name}</span>
            <SmallButton onClick={() => removePlaylist(props.id, props.name)}>apagar</SmallButton>
        </div>
        )
}