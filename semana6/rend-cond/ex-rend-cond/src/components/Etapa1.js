import React from 'react'
import styled from 'styled-components'

const Form1 = styled.div`
    margin: 0 auto;
    width: 500px;
    display: flex;
    flex-direction: column;
`
const MainTitle = styled.h1`
    font-size: 30px;
`

class Etapa1 extends React.Component {
    
    render() {
        return (
            <Form1>
                <MainTitle>ETAPA 1 - DADOS GERAIS</MainTitle>
                <label for="name">1. Qual é o seu nome?</label>
                <input value="" type="text"/>
                <label for="name">2. Qual é a sua idade?</label>
                <input value="" type="text"/>
                <label for="name">3. Qual é o seu e-mail?</label>
                <input value="" type="text"/>
                <label for="name">4. Qual é sua escolaridade?</label>
                <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </select>
                <button onClick={this.props.clickNext}>Próxima etapa</button>
            </Form1>
        )
    }
}

export default Etapa1;