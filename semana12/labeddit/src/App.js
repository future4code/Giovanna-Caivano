import React, { useState } from 'react';
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import Router from './routes/Router';
import theme from './constants/theme'
import NavBar from './components/NavBar';

const InnerScreenContainer = styled.div`
  padding-top: 64px;
`

function App() {
  const token = localStorage.getItem('token')
  const [buttonName, setButtonName] = useState(token ? 'logout' : 'login')

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar buttonName={buttonName} setButtonName={setButtonName}/>
        <InnerScreenContainer>
          <Router setButtonName={setButtonName}/>
        </InnerScreenContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
