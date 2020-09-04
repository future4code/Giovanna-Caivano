//dependecies
import React from 'react'
import Axios from 'axios'
import { Button, Box, Typography } from '@material-ui/core';
//components
import PlaylistCard from '../PlaylistCard/PlaylistCard.js'
import TrackCard from '../TrackCard/TrackCard.js'
//styles
import { MainContainer, wrapperProps, typoProps, boxProps } from '../ShowPlaylists/styles.js'

const baseURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/'
const credentials = 'giovanna-caivano-jackson'

export default class ShowPlaylists extends React.Component {
    
    _isMounted = false

    state = {
        playlistsArray: [],
        tracksArray: [],
        trackDetail: false,
        clickedPlaylist: "",
        isLoading: true
    }

    componentDidMount() {
        this._isMounted = true;

        this.getAllPlaylists()
    }

    getAllPlaylists = async () => {
        try{
            const response = await Axios.get(`${baseURL}playlists`, { 
                headers: { 
                    Authorization: credentials 
                }
            })
            if(this._isMounted){
                this.setState({ playlistsArray: response.data.result.list, isLoading: false  })
            }
            
        }catch(error){
            console.log(error)
        }
    }

    getPlaylistTracks = async (id) => {
        try{
            const response = await Axios.get(`${baseURL}playlists/${id}/tracks`, {
                headers: {
                    Authorization: credentials
                }
            })
            this.state.clickedPlaylist === id ? this.setState({ trackDetail: false, clickedPlaylist: "" }) : this.setState({ tracksArray: response.data.result.tracks, trackDetail: true, clickedPlaylist: id })
        }catch(error){console.log(error)}
        
    }

    removePlaylist = async (id, name) => {
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
        this.getAllPlaylists()
    }

    componentWillUnmount(){
        this._isMounted = false
    }

    render() {
        return(
            <MainContainer>
                <Box {...boxProps} bgcolor="#4d6b67">
                    <Box {...typoProps}><Typography variant="h4" color="textSecondary">suas playlists</Typography></Box>
                        {this.state.playlistsArray.map((item) => {
                            return <Box {...wrapperProps} key={item.id}>
                                <PlaylistCard name={item.name} id={item.id} onClickPlaylist={() => this.getPlaylistTracks(item.id)} onClickDelete={() => this.removePlaylist(item.id, item.name)} tracks={this.state.tracksArray} visibility={this.state.trackDetail}/>
                                <Button variant={"contained"} size={"small"}>+ músicas</Button>
                                {this.state.trackDetail && this.state.clickedPlaylist === item.id &&
                                <div>
                                    {this.state.tracksArray.map((track) => {
                                        return <TrackCard key={track.id} artist={track.artist} name={track.name} src={track.url}/>
                                    })}
                                </div>
                                }
                            </Box>
                        })}
                </Box>
            </MainContainer>
        )
    }
}