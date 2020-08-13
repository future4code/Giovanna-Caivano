import React from 'react'
import './Post.css'

import { IconeComContador } from '../IconeComContador/IconeComContador'
import { IconeSemContador } from '../IconeSemContador/IconeSemContador'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import { ComentarioFeito } from '../ComentarioFeito/ComentarioFeito'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeShare from '../../img/share.svg'
import iconeBookmarkPreto from '../../img/bookmark-black.svg'
import iconeBookmarkBranco from '../../img/bookmark_white.svg'
import { SecaoCompartilhar } from '../SecaoCompatilhar/SecaoCompartilhar'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    comentou: false,
    salvo: false,
    compartilhando: false
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

  onClickIcone = () => {
    console.log("Compartilhado no Facebook")
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
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
      options = <SecaoCompartilhar onClickIcone={this.onClickIcone}/>
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let comentario

    if(this.state.comentou) {
      comentario = <ComentarioFeito texto="Olha seu comentário aqui."/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
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
      </div>
      {options}
      {componenteComentario}
      {comentario}
    </div>
  }
}

export default Post