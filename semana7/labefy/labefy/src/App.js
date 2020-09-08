//dependencies
import React from 'react';
import {  MuiThemeProvider, Box, Button, Typography } from '@material-ui/core'
//components
import AddPlaylist from './components/AddPlaylists/AddPlaylist.js'
import HomeBanner from './components/HomeBanner/HomeBanner.js'
import OptionList from './components/OptionsList/OptionsList.js'
import ShowPlaylists from './components/ShowPlaylists/ShowPlaylists.js';
//styles
import { myTheme, boxProps, AppContainer, FakeHeader, Limefy, NavBar, Header, ButtonWrapper, Container } from './styles'
//images
import logo from './assets/img/LIMEFY.png'

export default class App extends React.Component {
  state = {
    optionList: true,
    newPlaylist: false,
    playlistArray: false,
    bannerVisibility: true
  }

  backToHome = () => {
    this.setState({ optionList: true, newPlaylist: false, playlistArray: false, searchByName: false, bannerVisibility: true })
  }

  alternateComponents = (id) => {
    if(id === 'creationId'){
      this.setState({ optionList: false, newPlaylist: true, playlistArray: false, bannerVisibility: false})
    } else if (id === 'visualId') {
      this.setState({ optionList: false, newPlaylist: false, playlistArray: true, bannerVisibility: false})
    } else {
      this.backToHome()
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={myTheme}>
        <AppContainer>
          <FakeHeader>
            <Header>
              <Limefy src={logo} alt={"Logo Limefy"}/>
              <NavBar>
                {this.state.optionList ? <OptionList newPlaylist={() => this.alternateComponents('creationId')} seePlaylist={() => this.alternateComponents('visualId')}/> : <ButtonWrapper><Button variant={"contained"} color={"primary"} onClick={this.backToHome}>voltar</Button></ButtonWrapper>}
              </NavBar>
            </Header>
          </FakeHeader>
          <Container>
            {this.state.newPlaylist ? <AddPlaylist/> : false }
            {this.state.playlistArray ? <ShowPlaylists/> : false }
            {this.state.bannerVisibility ? <HomeBanner/> : false}
            <Box {...boxProps}>
              <Typography variant="body1" color="textPrimary">
                @giovanna.caivano
              </Typography>
            </Box> 
          </Container>     
        </AppContainer>
      </MuiThemeProvider>
    );
  }
}
