//dependencies
import React from 'react';
import styled from 'styled-components';

//componentes
import AddPlaylist from './components/AddPlaylist.js'

//styles
import './App.css';

const LabefyTitle = styled.h1`
  text-transform: uppercase;
`

function App() {
  return (
    <div className="App">
      <LabefyTitle>labefy</LabefyTitle>
      <AddPlaylist/>
    </div>
  );
}

export default App;
