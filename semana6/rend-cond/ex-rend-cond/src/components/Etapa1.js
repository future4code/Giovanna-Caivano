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

    state = {
        name: "",
        age: "",
        email: "",  
        education: ""
    }
    
    updateName = (name) => {this.setState({name: name})}
    updateAge = (age) => {this.setState({age: age})}
    updateEmail = (email) => {this.setState({email: email})}
    updateEducation = (educ) => {this.setState({education: educ})}

    // onNext = () => {
    //     if(this.education === ("Ensino médio completo" || "Ensino médio incompleto")) {
    //         this.props.clickNextFunction(1)
    //     } else {
    //         this.props.clickNextFunction(0)
    //     }
    // }

    render() {
        return (
            <Form1>
                <TitleH1 titulo={"ETAPA 1 - DADOS GERAIS"}/>
                <PerguntaAberta pergunta={"1. Qual o seu nome?"} onChange={this.updateName} />
                <input value="" type="text"/>
                <PerguntaAberta pergunta={"2. Qual sua idade?"} onChange={this.updateAge}/>
                <input value="" type="text"/>
                <PerguntaAberta pergunta={"3. Qual é o seu e-mail?"} onChange={this.updateEmail}/>
                <input value="" type="text"/>
                <PerguntaFechada 
                    pergunta={"4. Qual é sua escolaridade?"}
                    opçoes={[
                        "Ensino médio incompleto",
                        "Ensino médio completo",
                        "Ensino superior incompleto",
                        "Ensino superior completo"]} 
                    onChange={this.updateEducation}
                    />
                <button onClick={this.props.clickNext}>Próxima etapa</button>
            </Form1>
        )
    }
}

export default Etapa1;