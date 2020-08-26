import React from 'react';
import './App.css';

import UserList from './components/UserList'
import UserSubscription from './components/UserSubscription'
import { BigButton } from './components/styled'

class App extends React.Component {
  state = {
    changePage: false
  }

  alternatePage = () => {
    this.setState({ changePage: !this.state.changePage })
  }

  render() {

    return (
      <div className="App">
        <BigButton onClick={this.alternatePage}>{this.state.changePage ? "Cadastro" : "Lista de Usuários" }</BigButton>
    <div>{this.state.changePage ? <UserList/> : <UserSubscription/>}</div>
      </div>
    );
  }
}

export default App;
