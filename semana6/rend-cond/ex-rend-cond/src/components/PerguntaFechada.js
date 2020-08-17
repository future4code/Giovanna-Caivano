import React from 'react'
import styled from 'styled-components'

const Pergunta = styled.label`
    display: block;
`

class PerguntaFechada extends React.Component {
    
    render() {
        const opçoes = this.props.opçoes.map((opçao) => {
            return <option>{opçao}</option>
        })
        return (
            <div>
                <Pergunta>{this.props.pergunta}</Pergunta>
                <select>{opçoes}</select>
            </div>
        )
    }
}

export default PerguntaFechada;