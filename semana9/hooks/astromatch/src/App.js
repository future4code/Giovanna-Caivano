import React, { useState } from 'react';
import { Container, Card, IconButton, CardActions, Box, Typography, ThemeProvider } from '@material-ui/core'
import MatchBox from './components/MatchBox'
import MatchList from './components/MatchList'
import ClearAll from './components/ClearAll'
import PeopleIcon from '@material-ui/icons/People';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { useStyles, theme } from './styles.js'
import './App.css';


function App() {
  const classes = useStyles();
  const [ choosing, setChoosing ] = useState(true)

  const choosingProfile = choosing ? <MatchBox/> : <MatchList/>
  const alternateIcon = choosing ? <PeopleIcon/> : <GroupAddIcon/>

  const changeProfile = () => {
    setChoosing(!choosing)
  }

  return (
    <div className="App">
        <Container className={classes.container}>
          <Card className={classes.card}>
            <Box className={classes.box}>
              <CardActions>
                <IconButton className={classes.button} aria-label="alternate" onClick={changeProfile}>{alternateIcon}</IconButton>
              </CardActions>
              <ThemeProvider theme={theme}>
                <Typography variant="h2">astromatch</Typography>
              </ThemeProvider>
            </Box>
            {choosingProfile}
          </Card>
        </Container>
        <ClearAll/>
    </div>
  );
}

export default App;
