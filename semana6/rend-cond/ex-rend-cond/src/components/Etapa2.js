import React from 'react'
import styled from 'styled-components'
import TitleH1 from './TitleH1'
import PerguntaAberta from './PerguntaAberta'

const Form2 = styled.div`
    margin: 0 auto;
    width: 500px;
    display: flex;
    flex-direction: column;
`

class Etapa2 extends React.Component {
    
    render() {
        return (
            <Form2>
                <TitleH1 titulo={"ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR"}/>
                <PerguntaAberta pergunta={"5. Qual curso?"} />
                <input value="" type="text"/>
                <PerguntaAberta pergunta={"6. Qual unidade de ensino?"} />
                <input value="" type="text"/>
                <button onClick={this.props.clickNext}>Próxima etapa</button>
            </Form2>
        )
    }
}

export default Etapa2;