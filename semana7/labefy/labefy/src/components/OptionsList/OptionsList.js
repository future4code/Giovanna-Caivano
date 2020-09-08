import React from 'react'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
//styles
import { ButtonWrapper } from './styles.js'

const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: '1rem',
  '@media (max-width:500px)': {
    fontSize: ' 0.5rem',
  }
};

theme.palette.primary = {
    light: "#4d6b67",
    main: "#23403d",
    dark: "#001a17",
    contrastText: "#ffffff"
}

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: "2px",
    }
}))


export default function OptionList(props){
    const classes = useStyles()
    return(
        <ThemeProvider theme={theme}>
            <ButtonWrapper>
                <Button variant={"contained"} color={"primary"} onClick={() => props.newPlaylist()} className={classes.margin}><Typography variant="h3">+ playlist</Typography></Button>
                <Button variant={"contained"} color={"primary"} onClick={() => props.seePlaylist()} className={classes.margin}><Typography variant="h3">ver playlists</Typography></Button>
            </ButtonWrapper>
        </ThemeProvider>
    )
}