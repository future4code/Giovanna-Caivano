import React from 'react';
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
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar/>
        <InnerScreenContainer>
          <Router/>
        </InnerScreenContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
