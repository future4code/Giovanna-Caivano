import React from 'react';
import axios from 'axios'

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
            <div>
                <h1>Cadastrar novo usuário:</h1>
                <label>Nome:</label>
                <input
                    value={this.state.userName}
                    onChange={this.onChangeNameInput}
                />
                <label>E-mail:</label>
                <input
                    value={this.state.userEmail}
                    onChange={this.onChangeEmailInput}
                />
                <button onClick={this.addUserToList}>Cadastrar</button>
            </div>
        )
    }
}

export default UserSubscription;