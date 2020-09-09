import React, { useState } from 'react';
import { Container, Card, IconButton, CardActions, Box, Typography } from '@material-ui/core'
import MatchBox from './components/MatchBox'
import MatchList from './components/MatchList'
import ClearAll from './components/ClearAll'
import PeopleIcon from '@material-ui/icons/People';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { useStyles } from './styles.js'
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
        <Container>
          <Card className={classes.card}>
            <Box className={classes.box}>
              <CardActions>
                <IconButton aria-label="alternate" onClick={changeProfile}>{alternateIcon}</IconButton>
              </CardActions>
              <Typography variant="h2">astromatch</Typography>
            </Box>
            {choosingProfile}
          </Card>
        </Container>
        <ClearAll/>
    </div>
  );
}

export default App;
