import React from 'react';
import axios from 'axios'

class UserList extends React.Component {

    state = {
        usersList: [],
        userDetail: false,
        userName: "",
        userId: ""
    }

    pullUserList = () => {
        const request = axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "giovanna-caivano-jackson"
          }
        });
    
        request.then((answer) => {
          this.setState({ usersList: answer.data })
        }).catch((error) => {
          console.log(error)
        })
    
      }

      componentDidMount() {
          this.pullUserList()
      }
    
      renderList = () => {
        console.log(this.state.usersList)
      }
    
      deleteUser = (id) => {

        const confirm = prompt("Deseja mesmo remover este usuário? S/N").toLowerCase()
        console.log(confirm)

        if(confirm === "s") {
            const request = axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, 
            {
              headers: {
                Authorization: "giovanna-caivano-jackson"
              }
            });
        
            request.then((answer) => {
              alert("Usuário removido com sucesso")
              this.pullUserList()
            }).catch((error) => {
              alert("Algo deu errado. Tente novamente.")
            })
        } else {
            alert("Resposta inválida. Tente novamente.")
        }

      }

      showDetail = (user) => {
          this.setState({ userDetail: !this.state.userDetail, userName: user.name, userId: user.id })

      }

    render() {
        const renderedList = this.state.usersList.map((user) => {
            return <li key={user.id} onClick={() => this.showDetail(user)}>{user.name} - <button onClick={() => this.deleteUser(user.id)}>X</button></li>
        })

        // const renderedUser = 

        return (
            <div>
                <h1>Lista de Usuários Cadastrados</h1>
                <ul>{renderedList}</ul>
        <div> {this.state.userDetail && <p><b>Detalhes:</b> <br/> Nome: {this.state.userName} <br/> Email:</p>}</div>
            </div>
        )
    }
}

export default UserList;