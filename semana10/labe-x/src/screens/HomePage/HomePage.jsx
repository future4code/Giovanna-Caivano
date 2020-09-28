import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToLoginPage, goToUserListTripsPage } from '../../router/goToPages'
import { FlexContainer, Text, Banner } from './styles'
import bannerImg from '../../assets/img/morning-brew-CKKoCSPcAk4-unsplash.jpg'
import { MainContainer, ButtonWrapper, StandardButton, MainCTA } from '../../styles'

const HomePage = () => {
    const history = useHistory();

    return (
        <MainContainer>
            <ButtonWrapper>
                <StandardButton onClick={() => goToLoginPage(history)}>admin</StandardButton>
            </ButtonWrapper>
            <FlexContainer>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magni consequuntur doloribus provident quisquam similique sapiente voluptatibus?
                </Text>
                <Banner src={bannerImg} alt={"Imagem de foguete - morning brew, unsplash"}/>
                <MainCTA onClick={() => goToUserListTripsPage(history)}>quero ver todas as viagens</MainCTA>
            </FlexContainer>
        </MainContainer>
    );
}

export default HomePage;