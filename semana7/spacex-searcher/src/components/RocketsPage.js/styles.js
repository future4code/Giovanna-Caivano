import styled from 'styled-components'

export const MainGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 10px;
`

export const RocketImg = styled.img`
    width: 300px;
    grid-row: 1/3;
    border-radius: 50px;

    @media (max-width: 900px) {
        width: 100px;
    }
`

export const MainTitle = styled.h1`
    grid-column: 1/3;
    font-family: 'Russo One', sans-serif;
`

export const RocketGrid = styled.div`
    margin: 20px auto;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3;
`

export const Title = styled.h4`
    grid-row: 1;
    font-family: 'Russo One', sans-serif;
`

export const RocketSizeBox = styled.div`
    grid-row: 2/3;    
    display: flex;
    flex-direction: column;
`

export const Text = styled.p`
    grid-column: 1/3;
    grid-row: 4;
`