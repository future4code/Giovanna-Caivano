import React from 'react'

import { MainContainer, SubTitle, ButtonWrapper, BigButton } from './styles.js'

export default function OptionList(props){
    
    return(
        <MainContainer>
            <SubTitle>escolha uma opção</SubTitle> 
            <ButtonWrapper>
                <BigButton onClick={() => props.newPlaylist()}>criar nova playlist</BigButton>
                <BigButton onClick={() => props.seePlaylist()}>ver todas as playlist</BigButton>
            </ButtonWrapper>
        </MainContainer>
    )
}