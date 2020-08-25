import React from 'react';
import axios from 'axios'

class UserList extends React.Component {

    state = {
        usersList: []
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
      }

    render() {
        const renderedList = this.state.usersList.map((user) => {
            return <li key={user.id}>{user.name} - <button onClick={() => this.deleteUser(user.id)}>X</button></li>
        })

        return (
            <div>
                <h1>Lista de Usuários Cadastrados</h1>
                <ul>{renderedList}</ul>
            </div>
        )
    }
}

export default UserList;