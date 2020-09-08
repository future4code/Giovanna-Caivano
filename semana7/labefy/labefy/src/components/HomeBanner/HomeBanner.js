import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {  MuiThemeProvider } from '@material-ui/core'
import {
    CardMedia
  } from "@material-ui/core";
import { myTheme } from '../../styles'
import bannerimg from '../../assets/img/banner-img-spencer-imbrock-unsplash.jpg'

const useStyles = makeStyles((theme) => ({
    media: {
      paddingTop: "40%",
    }
  }));

export default function HomeBanner(){
    const classes = useStyles()
    return(
        <MuiThemeProvider theme={myTheme}>
                <CardMedia
                    className={classes.media}
                    image={bannerimg}
                    title={"Garota ouvindo música"}
                />
        </MuiThemeProvider>
    )
}