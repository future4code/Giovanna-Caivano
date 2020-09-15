import React from 'react';
import './App.css';
import Router from './router/Router';
import logo from './assets/img/labe-x-logo.png'
import { Header, BoxWrapper, Logo, Heading1, Body2, Footer } from './styles';

function App() {
  return (
    <div className="App">
      <Header>
        <BoxWrapper>
          <Logo src={logo} alt={"Logo LabeX"}/>
          <Heading1>LabeX</Heading1>
        </BoxWrapper>
      </Header>
      <Router/>
      <Footer>
        <Body2>Labenu 2020</Body2>
      </Footer>
    </div>
  );
}

export default App;
