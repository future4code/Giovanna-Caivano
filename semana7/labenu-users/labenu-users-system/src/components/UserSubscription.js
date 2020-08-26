import React from 'react';
import axios from 'axios';
import {MainContainer, MainTitle, InputContainer, BigButton, StandardLabel} from './styled'

class UserSubscription extends React.Component {
    state = {
        userName: "",
        userEmail: ""
    }

    onChangeNameInput = (e) => {
        this.setState({ userName: e.target.value })
    } 
    onChangeEmailInput = (e) => {
        this.setState({ userEmail: e.target.value })
    }

    addUserToList = () => {
        const body = {
            name: this.state.userName,
            email: this.state.userEmail
        };

        const request = axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "giovanna-caivano-jackson"
            }
        });

        request.then((answer) => {
            alert("Novo usuário cadastrado com sucesso")
            this.setState({ userName: "", userEmail: "" })
        }).catch((error) => {
            alert("Algo deu errado. Tente novamente.")
        });
    }

    render() {
        return (
            <MainContainer>
                <MainTitle>Cadastrar Usuário</MainTitle>
                <InputContainer>
                    <StandardLabel>Nome:</StandardLabel>
                    <input
                        value={this.state.userName}
                        onChange={this.onChangeNameInput}
                    />
                </InputContainer>
                <InputContainer>
                    <StandardLabel>E-mail:</StandardLabel>
                    <input
                        value={this.state.userEmail}
                        onChange={this.onChangeEmailInput}
                    />
                </InputContainer>
                <InputContainer>
                    <BigButton onClick={this.addUserToList}>Cadastrar</BigButton>
                </InputContainer>
            </MainContainer>
        )
    }
}

export default UserSubscription;