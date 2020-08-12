import React from 'react'
import './SecaoCompartilhar.css'
import facebookIcon from '../../img/facebook_icon.svg'

export function SecaoCompartilhar(props) {
    return <div className={'share-container'}>
		<img alt={'Icone'} src={facebookIcon} onClick={props.onClickIcone}/>
		<img alt={'Icone'} src={facebookIcon} onClick={props.onClickIcone}/>
		<img alt={'Icone'} src={facebookIcon} onClick={props.onClickIcone}/>
	</div>
}