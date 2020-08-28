//dependencies
import React from 'react'
import axios from 'axios'

//styles
import { MainContainer, NewPlaylistContainer, PlaylistContainer, SubTitle, StandardLabel, StandardInput, SmallButton } from './styles.js'
import ShowPlaylists from './ShowPlaylists.js'

const baseURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/'
const credentials = 'giovanna-caivano-jackson'

export default class AddPlaylist extends React.Component{
    state = {
        newPlaylistName: "",
        playlistVisibility: false
    }

    onChangePlaylistName = (e) => {
        this.setState({ newPlaylistName: e.target.value})
    }

    createNewPlaylist = async () => {
        const body = {
            "name": this.state.newPlaylistName
        }
        try{
            await axios.post(`${baseURL}playlists`, 
            body, { 
                headers: { 
                    Authorization: credentials 
                }
            })
            alert(`Sua playlist ${this.state.newPlaylistName} foi criada!`)
            this.setState({ newPlaylistName: "" })
        }catch(error){
            console.log(error)
        }
    }

    alternateVisibility = () => {
        this.setState({ playlistVisibility: !this.state.playlistVisibility })
    }

    render() {
        return(
            <MainContainer>
                <NewPlaylistContainer>
                    <SubTitle>nova playlist</SubTitle>
                    <StandardLabel>nome</StandardLabel>
                    <StandardInput
                        placeholder="músicas para cantar no chuveiro"
                        value={this.state.newPlaylistName}
                        onChange={this.onChangePlaylistName}
                    />
                    <SmallButton onClick={this.createNewPlaylist}>criar</SmallButton>
                    <SmallButton onClick={this.alternateVisibility}>{!this.state.playlistVisibility ? 'ver todas' : 'esconder lista'}</SmallButton>
                </NewPlaylistContainer>
                <PlaylistContainer>
                    {this.state.playlistVisibility ? <ShowPlaylists/> : false}
                </PlaylistContainer>
            </MainContainer>
        )
    }
}