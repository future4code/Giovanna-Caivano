import styled from 'styled-components'
import { createMuiTheme } from '@material-ui/core'

export const myTheme = createMuiTheme({
    palette: {
      primary: {
        light: "#4d6b67",
        main: "#23403d",
        dark: "#001a17",
        contrastText: "#ffffff"
      },
      secondary: {
        light: "#ffff59",
        main: "#f2e313",
        dark: "#bbb100",
        contrastText: "#000000"
      }
    }
  })

export const boxProps ={
    height: "10%",
    position: "fixed",
    bottom: 0,
}

export const AppContainer = styled.div``

export const Limefy = styled.img`
    width: 103px;
    height: 27.5px;
    
    @media (min-width: 700px){
        width: 206px;
        height: 55px;
    }
    `

export const FakeHeader = styled.div`
    background-color: #ffff59;
    width: 100vw;
    height: 10vh;
    padding: 0 16px;
`

export const Header = styled.header`
    height: 10vh;
    margin: 0 auto;
    z-index: 1;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    @media (min-width: 1000px){
        width: 800px;
    }
`

export const NavBar = styled.nav`
    width: 55%;
    justify-content: inherit;

    @media (min-width: 700px) {
        width: 50%;
        justify-content: space-evenly;
    }
`

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Banner = styled.div`
    width: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    
    @media (min-width:700px){
        width: 850px;
    }
`

export const BannerImg = styled.img`
    width: 100%;
`

export const Container = styled.section`
    margin: 0 auto;
    background-color: #001a17;
    height: 90vh;
    width: 100vw;
    box-sizing: border-box;
    padding: 50px 10px; 

    @media (min-width: 1000px){
        padding: 50px;
    }
`

export const LabefyTitle = styled.h1`
  text-transform: uppercase;
`

export const NavContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const NewPlaylistContainer = styled.div`
    width: 45vw;
    align-self: center;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const PlaylistContainer = styled.div`
    width: 45vw;
    align-self: center;
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
`
export const PlaylistCardWrapper = styled.div`
    width: 100%;
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const TrackCardBox = styled.div`
    width: 100%;
    margin: 3px 0;
`

export const PlaylistCardBox = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const SubTitle = styled.h3`
    padding: 30px;
    align-self: center;
`

export const ContainerLabel = styled.h4`
    width: 100%;
    font-size: 25px;
    padding-left: 75px;
`

export const StandardLabel = styled.label``
export const StandardInput = styled.input``



export const SecondaryButtonWrapper = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
`

export const BigButton = styled.button``
export const SmallButton = styled.button``
 