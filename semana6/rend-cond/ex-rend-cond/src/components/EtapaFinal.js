import React from 'react'
import styled from 'styled-components'
import TitleH1 from './TitleH1'

const MsgFinal = styled.div`
    margin: 0 auto;
    width: 500px;
    display: flex;
    flex-direction: column;
`

class EtapaFinal extends React.Component {
    
    render() {
        return (
            <MsgFinal>
                <TitleH1 titulo={"o formulário acabou"}/>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </MsgFinal>
        )
    }
}

export default EtapaFinal;