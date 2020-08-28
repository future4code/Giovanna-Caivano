//dependecies
import React from 'react'
import Axios from 'axios'
import PlaylistCard from './PlaylistCard.js'

//styles
import { MainContainer, SubTitle } from './styles'

const baseURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/'
const credentials = 'giovanna-caivano-jackson'

export default class ShowPlaylists extends React.Component {
    state = {
        playlistsArray: [],
        tracksArray: [],
        trackDetail: false
    }

    componentDidMount() {
        this.getAllPlaylists()
    }
    
    componentDidUpdate() {
        this.getAllPlaylists()
    }

    getAllPlaylists = async () => {
        try{
            const response = await Axios.get(`${baseURL}playlists`, { 
                headers: { 
                    Authorization: credentials 
                }
            })
            this.setState({ playlistsArray: response.data.result.list })
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
            console.log(response.data.result.tracks)
            this.setState({ tracksArray: response.data.result.tracks, trackDetail: true })
        }catch(error){console.log(error)}
        
    }

    render() {
        return(
            <MainContainer>
                <SubTitle>suas playlists</SubTitle>
                {this.state.playlistsArray.map((item) => {
                    return <PlaylistCard key={item.id} name={item.name} id={item.id} onClickPlaylist={() => this.getPlaylistTracks(item.id)} tracks={this.state.tracksArray} visibility={this.state.trackDetail}/>
                })}
                {this.state.trackDetail && 
                <div>
                    {this.state.tracksArray.map((item) => {
                        return <span key={item.id}>{item.artist}: "{item.name}" - disponível em: "{item.url}"</span>
                    })}
                </div>
            }
            </MainContainer>
        )
    }
}