//dependecies
import React from 'react'
import Axios from 'axios'
import PlaylistCard from './PlaylistCard.js'

//styles
import { MainContainer, SubTitle, SmallButton } from './styles'
import TrackCard from './TrackCard.js'

const baseURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/'
const credentials = 'giovanna-caivano-jackson'

export default class ShowPlaylists extends React.Component {
    state = {
        playlistsArray: [],
        tracksArray: [],
        trackDetail: false,
        clickedPlaylist: ""
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
            this.state.clickedPlaylist === id ? this.setState({ trackDetail: false, clickedPlaylist: "" }) : this.setState({ tracksArray: response.data.result.tracks, trackDetail: true, clickedPlaylist: id })
            console.log(response.data.result.tracks)
        }catch(error){console.log(error)}
        
    }

    render() {
        return(
            <MainContainer>
                <SubTitle>suas playlists</SubTitle>
                {this.state.playlistsArray.map((item) => {
                    return <div key={item.id}>
                        <PlaylistCard name={item.name} id={item.id} onClickPlaylist={() => this.getPlaylistTracks(item.id)} tracks={this.state.tracksArray} visibility={this.state.trackDetail}/>
                        {this.state.trackDetail && this.state.clickedPlaylist === item.id &&
                        <div>
                            {this.state.tracksArray.map((track) => {
                                return <TrackCard key={track.id} artist={track.artist} name={track.name} src={track.url}/>
                            })}
                        </div>
                        }
                        <SmallButton>adicionar músicas</SmallButton>
                    </div>
                })}
            </MainContainer>
        )
    }
}