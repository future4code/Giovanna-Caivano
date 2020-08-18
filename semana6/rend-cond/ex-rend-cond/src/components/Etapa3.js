import React from 'react'
import styled from 'styled-components'
import TitleH1 from './TitleH1'
import PerguntaAberta from './PerguntaAberta'
import PerguntaFechada from './PerguntaFechada'

const Form3 = styled.div`
    margin: 0 auto;
    width: 500px;
    display: flex;
    flex-direction: column;
`

class Etapa3 extends React.Component {
    
    render() {
        return (
            <Form3>
                <TitleH1 titulo={"ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO"}/>
                <PerguntaAberta pergunta={"5. Por que você não terminou um curso de graduação?"} />
                <input value="" type="text"/>
                <PerguntaFechada 
                    pergunta={"6. Você fez algum curso complementar?"}
                    opçoes={[ "Nenhum",
                    "Curso técnico",
                    "Curso de inglês" ]}
                />
                <button onClick={this.props.clickNext}>Próxima etapa</button>
            </Form3>
        )
    }
}

export default Etapa3;