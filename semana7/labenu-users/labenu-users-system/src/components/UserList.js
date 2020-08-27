import React from 'react';
import axios from 'axios';
import { MainContainer, MainTitle, UserUnorderedList, InputContainer, StandardLabel, UserTag, UserName, DeleteX, DetailContainer, ButtonWrapper, SmallButton, UserInfo, UserInfoTitle, UserInfoText } from './styled'

const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/"

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

    pullFilteredList = async () => {
      const userName = this.state.searchName
      try {
        const response = await axios.get(`${baseURL}search?name=${userName}`,
        { 
          headers: { 
            Authorization: "giovanna-caivano-jackson"
          }
        })
        this.setState({ usersList: response.data })
      } catch(error) {
        console.log(error)
      }
    }

    //request to get all users
    pullUserList = async () => {
      try {
        const response = await axios.get(baseURL,
        {
          headers: {
            Authorization: "giovanna-caivano-jackson"
          }
        });
        this.setState({ usersList: response.data })
      } catch(error) {
          alert("Algo deu errado. Tente novamente.")
        }
    }       
    
    //delete user mechanism
    deleteUser = (id) => {
      const confirm = window.confirm("Deseja mesmo remover este usuário?")

      if(!confirm) {
        alert("Ok!")
      } else if (confirm) {
        const request = axios.delete(`${baseURL}${id}`, 
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
    showDetail = async (id) => {
      try{
        const response = await axios.get(`${baseURL}${id}`,
        {
          headers: {
            Authorization: "giovanna-caivano-jackson"
          }
        });
    
        this.state.userObject.id === id ? this.setState({ userDetail: false, userObject: "" }) : this.setState({ userDetail: true, userObject: response.data })
      } catch(error) {
        console.log(error)
      }
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
        
        const request = axios.put(`${baseURL}${id}`,
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