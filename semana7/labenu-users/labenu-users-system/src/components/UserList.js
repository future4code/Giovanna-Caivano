import React from 'react';
import axios from 'axios';
import { MainContainer, MainTitle, UserUnorderedList, InputContainer, StandardLabel, UserTag, UserName, DeleteX, DetailContainer, ButtonWrapper, SmallButton, UserInfo, UserInfoTitle, UserInfoText } from './styled'

class UserList extends React.Component {
    state = {
        usersList: [],
        userDetail: false,
        userObject: [],
        userName: "",
        userId: "",
        editWindow: false,
        editName: "",
        editEmail: "",
        searchName: ""
    }

    //search by name mechanism
    onChangeSearchName = (e) => {
      this.setState({ searchName: e.target.value})
    }

    pullFilteredList = () => {
      const userName = this.state.searchName

      const request = axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${userName}`,
      { 
        headers: { 
          Authorization: "giovanna-caivano-jackson"
        }
      })
      request.then((answer) => {
        this.setState({ usersList: answer.data })
      }).catch((error) => {
        console.log(error)
      })
    }

    //request to get all users
    pullUserList = async () => {
      try {
        const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "giovanna-caivano-jackson"
          }
        });

        this.setState({ usersList: response.data })
     
      } catch(error) {
          console.log(error)
        }
    }       
    
    //delete user mechanism
    deleteUser = (id) => {
      let confirm = prompt("Deseja mesmo remover este usuário? S/N")
      console.log(confirm)

      confirm = (confirm === null ? "n" : confirm.toLowerCase())

      if(confirm === "n") {
        alert("Ok!")
      } else if (confirm === "s") {
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
        } else {
          alert("Algo deu errado. Tente novamente.")
      }
    }

    //showing user details mechanism
    showDetail = (id) => {
      const request = axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      {
        headers: {
          Authorization: "giovanna-caivano-jackson"
        }
      });
  
      request.then((answer) => {
        this.state.userObject.id === id ? this.setState({ userDetail: false, userObject: "" }) : this.setState({ userDetail: true, userObject: answer.data })
        console.log(answer.data.id)
      }).catch((error) => {
        console.log(error)
      })
    }

    closeDetail = () => {
      this.setState({ userDetail: false, editWindow: false, userObject: "" })
    }

    //edition mechanism
    showEditUser = () => {
        this.setState({ editWindow: !this.state.editWindow })
    }

    onChangeEditName = (e) => {
      this.setState({ editName: e.target.value })
    } 
    
    onChangeEditEmail = (e) => {
      this.setState({ editEmail: e.target.value })
    }

    editUser = (id) => {

      if(this.state.editName === "" || this.state.editEmail === "") {
        alert("Você deve preencher os dois campos!")
      } else {
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
            this.setState({ editName: "", editEmail: "", userObject: [], editWindow: false, userDetail: false }, this.pullUserList)
          console.log(answer.data)
        }).catch((error) => {
          console.log(error)
        })
      }
    }

    //lifecycle methods
    componentDidMount() {
      this.pullUserList()
    }

    render() {
        const renderedList = this.state.usersList.map((user) => {
            return <UserTag key={user.id}><UserName onClick={() => this.showDetail(user.id)}>{user.name}</UserName><DeleteX onClick={() => this.deleteUser(user.id)}>X</DeleteX></UserTag>
        }) 

        return (
            <MainContainer>
                <MainTitle>Lista de Usuários Cadastrados</MainTitle>
                <InputContainer>
                  <StandardLabel>Pesquisar por nome:</StandardLabel>
                  <input 
                    value={this.state.searchName}
                    onChange={this.onChangeSearchName}
                  />
                  <ButtonWrapper>

                    <SmallButton onClick={this.pullFilteredList}>Buscar</SmallButton>
                    <SmallButton onClick={this.pullUserList}>Mostrar Todos</SmallButton>
                  </ButtonWrapper>
                </InputContainer>
                <UserUnorderedList>{renderedList}</UserUnorderedList>
                <DetailContainer>
                    {this.state.userDetail && 
                    <UserInfo>
                        <UserInfoTitle>Informações do usuário:</UserInfoTitle> 
                        <UserInfoText>Nome: {this.state.userObject.name}</UserInfoText> 
                        <UserInfoText>Email: {this.state.userObject.email}</UserInfoText>
                        <ButtonWrapper>
                          <SmallButton onClick={() => this.deleteUser(this.state.userObject.id)}>Deletar</SmallButton>
                          <SmallButton onClick={this.showEditUser}>Editar</SmallButton>
                          <SmallButton onClick={this.closeDetail}>Fechar</SmallButton>
                        </ButtonWrapper> 
                    </UserInfo>}
                    <div>{this.state.editWindow && 
                        <div>
                            <UserInfoTitle>Editar informações:</UserInfoTitle>
                            <InputContainer>
                              <StandardLabel>Novo nome:</StandardLabel>
                              <input 
                                  placeholder={"obrigatório"}
                                  value={this.state.editName}
                                  onChange={this.onChangeEditName}
                                  />
                            </InputContainer>
                            <InputContainer>
                              <StandardLabel>Novo email:</StandardLabel>
                              <input 
                                  placeholder={"obrigatório"}
                                  value={this.state.editEmail}
                                  onChange={this.onChangeEditEmail}
                              />
                            </InputContainer>
                            <ButtonWrapper>
                              <SmallButton onClick={() => this.editUser(this.state.userObject.id)}>Salvar</SmallButton>
                            </ButtonWrapper>
                        </div>}
                    </div>
                </DetailContainer>
            </MainContainer>
        )
    }
}

export default UserList;