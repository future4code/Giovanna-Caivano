import React from 'react';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import EtapaFinal from './components/EtapaFinal'

class App extends React.Component {
  state = {
    currentPage: 1
  }

  clickNextFunction = () => {
    this.setState({
      currentPage: this.state.currentPage += 1
    })
  }
  render() {
    const renderedPage = () => {
      switch (this.state.currentPage) {
        case 1:
          return <Etapa1 clickNext={this.clickNextFunction}/>      
        case 2:
          return <Etapa2 clickNext={this.clickNextFunction}/>      
        case 3:
          return <Etapa3 clickNext={this.clickNextFunction}/>      
        default:
          return <EtapaFinal/>
      }
    }
    return (
      <div>
        {renderedPage()}
      </div>
    );
  }
}

export default App;
