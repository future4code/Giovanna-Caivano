import React from "react";
import LauchesList from "./components/LaunchesList.js";
import RocketsPage from "./components/RocketsPage.js/index.js";
import logo from './rocket.svg'

import { MainContainer, Container, LogoImg, SubTitle } from './styles.js'


export default class App extends React.Component {
  state = {
    listVisibility: true
  };

  changeVisibility = () => {
    this.setState({
      listVisibility: !this.state.listVisibility
    })
  }


  render() {
    return (
      <MainContainer>
        <Container><LogoImg src={logo}/></Container>
        <Container>
          {this.state.listVisibility ? <div><SubTitle onClick={this.changeVisibility}>I just wanna see some rockets...</SubTitle><LauchesList/></div> : <div><SubTitle onClick={this.changeVisibility}>I wanna see all missions!</SubTitle><RocketsPage/></div>}  
        </Container>
      </MainContainer>
    );
  }
}
