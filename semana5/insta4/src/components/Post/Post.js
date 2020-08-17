import React from 'react'
import styled from 'styled-components';

import { IconeComContador } from '../IconeComContador/IconeComContador'
import { IconeSemContador } from '../IconeSemContador/IconeSemContador'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeShare from '../../img/share.svg'
import iconeBookmarkPreto from '../../img/bookmark-black.svg'
import iconeBookmarkBranco from '../../img/bookmark_white.svg'
import { SecaoCompartilhar } from '../SecaoCompatilhar/SecaoCompartilhar'

const PostContainer = styled.div`
    border: 1px solid gray;
    width: 300px;
    margin-bottom: 10px;
`

const PostHeader = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
`

const PostFooter = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between;
`
const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    compartilhando: false,
    comentou: false,
  }

  onClickCurtida = () => {
    if (!this.state.curtido) {
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    } else {
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
  }

  onClickSalvo = () => {
    if (!this.state.salvo) {
      this.setState({
        salvo: !this.state.salvo
      })
    } else {
      this.setState({
        salvo: !this.state.salvo
      })
    }
  }

  onClickShare = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    
    this.setState({
      comentando: true,
      numeroComentarios: this.state.numeroComentarios + 1,
      comentou: true
    })
  }

  render() {
    let iconeCurtida
    let iconeSalvo

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if(this.state.salvo) {
      iconeSalvo = iconeBookmarkPreto
    } else {
      iconeSalvo = iconeBookmarkBranco
    }

    let options

    if(this.state.compartilhando) {
      options = <SecaoCompartilhar/>
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeSemContador 
          icone={iconeSalvo}
          onClickIcone={this.onClickSalvo}
        />

        <IconeSemContador 
          icone={iconeShare}
          onClickIcone={this.onClickShare}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {options}
      {componenteComentario}
    </PostContainer>
  }
}

export default Post