import React from 'react';
import axios from 'axios'

class UserList extends React.Component {
    state = {
        usersList: [],
        userDetail: false,
        userObject: [],
        userName: "",
        userId: "",
        editWindow: false,
        editName: "",
        editEmail: ""
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
              this.setState({ userDetail: false})
            }).catch((error) => {
              alert("Algo deu errado. Tente novamente.")
            })
        } else if (confirm === "n") {
            alert("Ok!")
        } else {
            alert("Resposta inválida. Tente novamente.")
        }

      }

      showDetail = (id) => {

        const request = axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "giovanna-caivano-jackson"
          }
        });
    
        request.then((answer) => {
          this.setState({ userDetail: !this.state.userDetail, userObject: answer.data })
          console.log(answer.data)
        }).catch((error) => {
          console.log(error)
        })
      }

      closeDetail = () => {
        this.setState({ userDetail: false, editWindow: false })
      }

      showEditUser = () => {
          this.setState({ editWindow: !this.state.editWindow })
      }

      editUser = (id) => {

          const body = {
              name: this.state.editName,
              email: this.state.editEmail
          }
          
          const request = axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          body,
        {
          headers: {
            Authorization: "giovanna-caivano-jackson"
          }
        });
    
        request.then((answer) => {
            this.setState({ editName: "", editEmail: "", userObject: [], editWindow: false, userDetail: false }, this.pullUserList())
          console.log(answer.data)
        }).catch((error) => {
          console.log(error)
        })

      }

      onChangeEditName = (e) => {
        this.setState({ editName: e.target.value })
        } 
        onChangeEditEmail = (e) => {
        this.setState({ editEmail: e.target.value })
        }



    render() {
        const renderedList = this.state.usersList.map((user) => {
            return <li key={user.id}><p onClick={() => this.showDetail(user.id)}>{user.name}</p> - <button onClick={() => this.deleteUser(user.id)}>X</button></li>
        }) 

        return (
            <div>
                <h1>Lista de Usuários Cadastrados</h1>
                <ul>{renderedList}</ul>
                <div>
                    {this.state.userDetail && 
                    <div>
                        <b>Detalhes:</b> 
                        <br/> 
                        Nome: {this.state.userObject.name} 
                        <br/> 
                        Email: {this.state.userObject.email} 
                        <button onClick={() => this.deleteUser(this.state.userObject.id)}>Deletar</button>
                        <button onClick={this.showEditUser}>Editar</button>
                        <button onClick={this.closeDetail}>Fechar</button>
                    </div>}
                    <div>{this.state.editWindow && 
                        <div>
                            <b>Editar:</b>
                            <br/>
                            <label>Novo nome:</label>
                            <input 
                                value={this.state.editName}
                                onChange={this.onChangeEditName}
                            />
                            <label>Novo email:</label>
                            <input 
                                value={this.state.editEmail}
                                onChange={this.onChangeEditEmail}
                            />
                            <button onClick={() => this.editUser(this.state.userObject.id)}>Salvar</button>
                        </div>}
                    </div>
                </div>
            </div>
        )
    }
}

export default UserList;