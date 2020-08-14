import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
    justify-content: center;
    padding: 5px;
`

const FormComentario = styled.div`
	width: 100%;
	margin-bottom: 10px;
`

const InputComentario = styled.input`
    margin-right: 5px;
`

const BotaoComentario = styled.button`
	width: 25%;
`

const BoxDeComentarios = styled.ul`
	width: 100%;
	list-style-type: none;
	margin: 0;
	padding: 0;
`

const ItemComentario = styled.li`
	font-size: 13px;
	margin-bottom: 2px;
`

export class SecaoComentario extends Component {
	state = {
		comentarios: [],
		valorInputCometario: ""
	}

	onChangeComentario = (event) => {
		this.setState({
			valorInputCometario: event.target.value
		});
	};

	funcao = (valorInput) => {
		this.props.aoEnviar()
		
		const arrayDeNovosComentarios = [...this.state.comentarios, valorInput]

		this.setState({
			comentarios: arrayDeNovosComentarios,
			valorInputCometario: ""
		})
	}

	render() {

		const listaDeComentarios = this.state.comentarios.map((comentario) => {
			return (
			<ItemComentario> user said: {comentario}</ItemComentario>
			)
		})

		return <CommentContainer>
			<FormComentario>
				<InputComentario
					placeholder={'Comentário'}
					value={this.state.valorInputCometario}
					onChange={this.onChangeComentario}
				/>
				<BotaoComentario onClick={() => this.funcao(this.state.valorInputCometario)}>Enviar</BotaoComentario>
			</FormComentario>
			<BoxDeComentarios>{listaDeComentarios}</BoxDeComentarios>
		</CommentContainer>
	}
}
