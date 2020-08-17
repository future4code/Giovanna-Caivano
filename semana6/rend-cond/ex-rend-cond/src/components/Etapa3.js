import React from 'react'
import styled from 'styled-components'

const Form3 = styled.div`
    margin: 0 auto;
    width: 500px;
    display: flex;
    flex-direction: column;
`
const MainTitle = styled.h1`
    font-size: 30px;
`

class Etapa3 extends React.Component {
    
    render() {
        return (
            <Form3>
                <MainTitle>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</MainTitle>
                <label for="name">5. Por que você não terminou o curso de graduação?</label>
                <input value="" type="text"/>
                <label for="name">6. Você fez algum curso complementar?</label>
                <select>
                    <option>Nenhum</option>
                    <option>Curso técnico</option>
                    <option>Curso de inglês</option>
                </select>
                <button onClick={this.props.clickNext}>Próxima etapa</button>
            </Form3>
        )
    }
}

export default Etapa3;