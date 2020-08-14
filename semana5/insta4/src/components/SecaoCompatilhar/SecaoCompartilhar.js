import React, { Component } from 'react'
import styled from 'styled-components'
import facebookIcon from '../../img/facebook_icon.svg'
import instagramIcon from '../../img/instagram.svg'
import twitterIcon from '../../img/twitter.svg'

const ShareContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
    justify-content: center;
    padding: 5px;
`

const IgIcon = styled.img`
	width: 21px;
`

const TwitterIcon = styled.img`
	width: 21px;
`

const ShareMsg = styled.div`
	width: 100%;
	justify-self: center;
	text-align: center;
	font-size: 13px;
	margin-top: 3px;
	margin-bottom: 3px;
`
	
export class SecaoCompartilhar extends Component {
	state = {
		msg: ""
	}

	onClickIconeIg = (event) => {
		this.setState({
			msg: "Post compartilhado no Instagram"
		})
	}
	onClickIconeFb = (event) => {
		this.setState({
			msg: "Post compartilhado no Facebok"
		})
	}
	
	onClickIconeTwitter = (event) => {
		this.setState({
			msg: "Post compartilhado no Twitter"
		})
	}
	render(){
		return <ShareContainer>
			<IgIcon alt={'Icone'} src={instagramIcon} onClick={this.onClickIconeIg}/>
			<img alt={'Icone'} src={facebookIcon} onClick={this.onClickIconeFb}/>
			<TwitterIcon alt={'Icone'} src={twitterIcon} onClick={this.onClickIconeTwitter}/>
			<ShareMsg>{this.state.msg}</ShareMsg>
		</ShareContainer>
	}
}