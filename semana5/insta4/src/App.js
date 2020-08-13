import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';

  const PostForm = styled.div `
    text-align: center;
    border: 1px solid gray;
    width: 300px;
    height: 200px;
    margin-bottom: 10px;
    box-sizing: border-box;
    padding: 10px;
  `

  const FormTitle = styled.h1`
    font-size: 20px;
  `

  const PostInput = styled.input`
    width: 200px;
    margin-bottom: 4px;
  `

  const PostButton = styled.button`
    display: block;
    margin: 0 auto;
  `

class App extends React.Component {


  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'giovanna',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151'
      },
      {
        nomeUsuario: 'renato',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152'
      }
    ],
    valorInputNome:"",
    valorInputFotoUsuario:"",
    valorInputFotoPost:""
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value })
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value })
  }

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value })
  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const novoArrayDePosts = [...this.state.posts, novoPost];

    this.setState({
      posts: novoArrayDePosts,
      valorInputNome: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    });
  };

  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    });

    return (
        <div className={'app-container'}>
          <PostForm>
              <FormTitle>Novo Post</FormTitle>
              <PostInput 
              value={this.state.valorInputNome}
              onChange={this.onChangeInputNome}
              placeholder={"Nome do usuário"}
              />
              <PostInput 
              value={this.state.valorInputFotoUsuario}
              onChange={this.onChangeInputFotoUsuario}
              placeholder={"Link da foto do usuário"}
              />
              <PostInput 
              value={this.state.valorInputFotoPost}
              onChange={this.onChangeInputFotoPost}
              placeholder={"Link da foto do post"}
              />
              <PostButton onClick={this.adicionaPost}>Post</PostButton>
          </PostForm>
          {listaDePosts}
        </div>
    );
  }
}

export default App;
