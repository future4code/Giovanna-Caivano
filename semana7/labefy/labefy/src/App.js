//dependencies
import React from 'react';
import styled from 'styled-components';

//componentes
import AddPlaylist from './components/AddPlaylist.js'
import OptionList from './components/OptionsList.js'
//styles
import './App.css';
import { SmallButton } from './components/styles'
import ShowPlaylists from './components/ShowPlaylists.js';

const LabefyTitle = styled.h1`
  text-transform: uppercase;
`

class App extends React.Component {
  state = {
    optionList: true,
    newPlaylist: false,
    playlistArray: false
  }

  backToHome = () => {
    this.setState({ optionList: true, newPlaylist: false, playlistArray: false, searchByName: false })
  }

  alternateComponents = (id) => {
    if(id === 'creationId'){
      this.setState({ optionList: false, newPlaylist: true, playlistArray: false})
    } else if (id === 'visualId') {
      this.setState({ optionList: false, newPlaylist: false, playlistArray: true})
    } else {
      this.backToHome()
    }
  }

  render() {
    return (
      <div className="App">
        <LabefyTitle>labefy</LabefyTitle>
        {this.state.optionList ? <OptionList newPlaylist={() => this.alternateComponents('creationId')} seePlaylist={() => this.alternateComponents('visualId')}/> : <SmallButton onClick={this.backToHome}>voltar</SmallButton>}
        {this.state.newPlaylist ? <AddPlaylist/> : false }
        {this.state.playlistArray ? <ShowPlaylists/> : false }
        
      </div>
    );
  }
}

export default App;
