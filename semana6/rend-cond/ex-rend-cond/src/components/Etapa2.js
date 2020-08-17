import React from 'react'
import styled from 'styled-components'

const Form2 = styled.div`
    margin: 0 auto;
    width: 500px;
    display: flex;
    flex-direction: column;
`
const MainTitle = styled.h1`
    font-size: 30px;
`

class Etapa2 extends React.Component {
    
    render() {
        return (
            <Form2>
                <MainTitle>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</MainTitle>
                <label for="name">5. Qual curso?</label>
                <input value="" type="text"/>
                <label for="name">6. Qual unidade de ensino?</label>
                <input value="" type="text"/>
                <button onClick={this.props.clickNext}>Próxima etapa</button>
            </Form2>
        )
    }
}

export default Etapa2;