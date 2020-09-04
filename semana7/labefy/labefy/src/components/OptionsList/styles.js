import styled from 'styled-components'

export const ButtonWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    @media (min-width: 1050px){
        width: 100%;
        padding: 30px;
        justify-content: space-around;
    }

    @media (min-width: 700px){
        justify-content: space-evenly;
    }
`