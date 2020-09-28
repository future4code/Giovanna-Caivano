import styled from 'styled-components'

//HEADER
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

export const Logo = styled.img`
    height: 7vh; 
`

//MAIN & STANDARD
//Grid guideline
export const MainContainer = styled.section`
    height: 80vh;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 40px repeat(4, 1fr) 40px;
`

export const BoxWrapper = styled.div`
    left: 0%;
    display: flex;
    box-sizing: border-box;
    align-items: center;
`
export const InputWrapper = styled.div`
    width: 240px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

//TYPOGRAPHY
//Logo Heading
export const Heading1 = styled.h1`
    font-family: 'Quantico', sans-serif;
    margin: 0;
`
//Standard body
export const Body2 = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: white;
`

//LISTS
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

export const ListHeading = styled.h4`
    font-family: 'Roboto', sans-serif;
    margin: 0;
    font-weight: bold;
    grid-row: 2/3;
    grid-column: 1/7;
`

export const Item = styled.li`
    cursor: pointer;
    
    &:hover {
        color: #F28705;
    }
`

//BUTTONS
export const MainCTA = styled.button`
    font-family: 'Roboto',sans-serif;
    font-weight: bold;
    color: white;
    letter-spacing: 1px;
    width: 200px;
    padding: 5px;
    background-color: #04BF9D;
    border-radius: 10px;
    border: none;
    box-shadow: #52E3C8 2px 2px;
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

export const SecondaryButton = styled.button`
    font-family: 'Roboto',sans-serif;
    letter-spacing: 1px;
    width: 80px;
    padding: 3px;
    background-color: #F27405;
    border-radius: 10px;
    border: none;
    box-shadow: #732103 1px 1px;
`

//FORMS
export const StandardForm = styled.form`
    grid-row: 2/6;
    grid-column: 1/7;
    margin: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const ShortTextInput = styled.input`
    font-family: 'Roboto',sans-serif;
    width: 240px;
    padding: 10px 20px;
    box-sizing: border-box;
    border: none;
    border-bottom: solid 1px darkgray;
    background-color: lightgray;
    border-radius: 2px;
`

export const LongTextInput = styled.textarea`
    font-family: 'Roboto',sans-serif;
    width: 240px;
    height: 150px;
    padding: 10px 20px;
    box-sizing: border-box;
    border: none;
    border-bottom: solid 1px darkgray;
    background-color: lightgray;
    border-radius: 2px;
`
export const SelectInput = styled.select`
    width: 50%;
`
export const DateInput = styled.input`
    width: 70%;
`
export const NumberInput = styled.input`
    width: 240px;
    padding: 10px 20px;
    box-sizing: border-box;
    border: none;
    border-bottom: solid 1px darkgray;
    background-color: lightgray;
    border-radius: 2px;
`
export const StandardLabel = styled.label`
    font-family: 'Roboto', sans-serif;
`

//FOOTER
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
