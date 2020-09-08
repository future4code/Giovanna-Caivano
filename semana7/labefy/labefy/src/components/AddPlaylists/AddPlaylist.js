//dependencies
import React from 'react'
import axios from 'axios'
import { MuiThemeProvider, Box, Button, Input, Typography } from '@material-ui/core';
//components
import ShowPlaylists from '../ShowPlaylists/ShowPlaylists.js'
//styles
import { MainContainer, PlaylistContainer, SecondaryWrapper, boxProps, typoProps } from '../AddPlaylists/styles.js'
import { myTheme } from '../../styles'

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
            <MuiThemeProvider theme={myTheme}>
                <MainContainer>
                    <Box {...boxProps} bgcolor="#4d6b67">
                        <Box {...typoProps}><Typography variant="h4" color="textSecondary">nova playlist</Typography></Box>
                        <SecondaryWrapper>
                            <Input
                                placeholder="nome da playlist"
                                value={this.state.newPlaylistName}
                                onChange={this.onChangePlaylistName}
                            />
                        </SecondaryWrapper>
                        <SecondaryWrapper>
                            <Button variant={"contained"} color={"secondary"} onClick={this.createNewPlaylist}>criar</Button>
                            <Button variant={"contained"} color={"secondary"} onClick={this.alternateVisibility}>{!this.state.playlistVisibility ? 'ver todas' : 'esconder'}</Button>
                        </SecondaryWrapper>
                    </Box>
                    <PlaylistContainer>
                        {this.state.playlistVisibility ? <ShowPlaylists/> : false}
                    </PlaylistContainer>
                </MainContainer>
            </MuiThemeProvider>
        )
    }
}