import React from 'react'
import styled from 'styled-components'

const MsgFinal = styled.div`
    margin: 0 auto;
    width: 500px;
    display: flex;
    flex-direction: column;
`
const MainTitle = styled.h1`
    font-size: 30px;
    text-transform: uppercase;
`

class EtapaFinal extends React.Component {
    
    render() {
        return (
            <MsgFinal>
                <MainTitle>o formulário acabou</MainTitle>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </MsgFinal>
        )
    }
}

export default EtapaFinal;