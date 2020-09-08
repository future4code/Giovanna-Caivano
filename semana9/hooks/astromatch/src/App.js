import React, { useState } from 'react';
import { Container, Card } from '@material-ui/core'
import MatchBox from './components/MatchBox'
import MatchList from './components/MatchList'
import ClearAll from './components/ClearAll'

import './App.css';

function App() {
  const [ choosing, setChoosing ] = useState(true)

  const choosingProfile = choosing ? <MatchBox/> : <MatchList/>

  const changeProfile = () => {
    setChoosing(!choosing)
  }




  return (
    <div className="App">
      <Container>
        <Card>
          <p onClick={changeProfile}>matches</p>
          {choosingProfile}
        </Card>
      </Container>
      <ClearAll/>
    </div>
  );
}

export default App;
