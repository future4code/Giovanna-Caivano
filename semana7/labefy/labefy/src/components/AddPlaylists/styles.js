import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
//Box
export const NewPlaylistContainer = styled.div`
    width: 45vw;
    align-self: center;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-around;
`
export const boxProps ={
    width: "45vw",
    alignSelf: "center",
    display: "flex",
    flexFlow: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    borderRadius: "2%",
}

export const typoProps = {
    width: "100%",
    textAlign: "center",
    marginBottom: "20px",
    marginTop: "20px",
}

export const PlaylistContainer = styled.div`
    width: 45vw;
    align-self: center;
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
`

export const SecondaryWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    @media (min-width: 1050px){
        width: 40%;
        padding: 30px;
        justify-content: space-around;
    }

    @media (min-width: 700px){
        justify-content: space-evenly;
    }
`