import styled from 'styled-components'

export const Header = styled.header`
    background-color: #F29F05;
    height: 10vh;
    width: 100vw;
    top: 0;
    padding: 1vh;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
`

export const MainContainer = styled.section`
    height: 80vh;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 40px repeat(4, 1fr) 40px;
`

export const ListContainer = styled.ul`
    grid-row: 2/6;
    grid-column: 1/7;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    list-style-type: none;
    padding: 0;
`

export const ButtonWrapper = styled.div`
    grid-row: 1/2;
    grid-column: 1/7;
    right: 0;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    justify-content: flex-end;
    align-items: center;
`

export const StandardButton = styled.button`
    font-family: 'Roboto',sans-serif;
    letter-spacing: 1px;
    width: 80px;
    padding: 3px;
    background-color: #F29F05;
    border-radius: 10px;
    border: none;
    box-shadow: #FAC666 1px 1px;
`

export const BoxWrapper = styled.div`
    left: 0%;
    display: flex;
    box-sizing: border-box;
    align-items: center;
`

export const Logo = styled.img`
    height: 7vh; 
`

export const Heading1 = styled.h1`
    font-family: 'Quantico', sans-serif;
    margin: 0;
`
export const ListHeading = styled.h4`
    font-family: 'Roboto', sans-serif;
    margin: 0;
    font-weight: bold;
    grid-row: 2/3;
    grid-column: 1/7;
`

export const Body2 = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: white;
`

export const Footer = styled.footer`
    background-color: #732103;
    height: 10vh;
    width: 100vw;
    position: fixed;
    bottom: 0;
    padding: 1vh;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
`
