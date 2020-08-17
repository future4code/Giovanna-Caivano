import React from 'react'
import styled from 'styled-components'
import TitleH1 from './TitleH1'
import PerguntaAberta from './PerguntaAberta'
import PerguntaFechada from './PerguntaFechada'

const Form1 = styled.div`
    margin: 0 auto;
    width: 500px;
    display: flex;
    flex-direction: column;
`

class Etapa1 extends React.Component {
    
    render() {
        return (
            <Form1>
                <TitleH1 titulo={"ETAPA 1 - DADOS GERAIS"}/>
                <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
                <input value="" type="text"/>
                <PerguntaAberta pergunta={"2. Qual sua idade?"} />
                <input value="" type="text"/>
                <PerguntaAberta pergunta={"3. Qual é o seu e-mail?"} />
                <input value="" type="text"/>
                <PerguntaFechada 
                    pergunta={"4. Qual é sua escolaridade?"}
                    opçoes={[
                        "Ensino médio completo",
                        "Ensino superior incompleto",
                        "Ensino médio incompleto",
                        "Ensino superior completo"]} />
                <button onClick={this.props.clickNext}>Próxima etapa</button>
            </Form1>
        )
    }
}

export default Etapa1;