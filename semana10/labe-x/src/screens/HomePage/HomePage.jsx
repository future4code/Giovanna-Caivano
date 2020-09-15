import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToLoginPage, goToListTripsPage } from '../../router/goToPages'
import { Container, Banner } from './styles'
import bannerImg from '../../assets/img/morning-brew-CKKoCSPcAk4-unsplash.jpg'

const HomePage = () => {
    const history = useHistory();

    return (
        <Container>
            <button onClick={() => goToLoginPage(history)}>admin</button>
            <Banner src={bannerImg} alt={"Imagem de foguete - morning brew, unsplash"}/>
            <button onClick={() => goToListTripsPage(history, false)}>quero ver todas as viagens</button>
        </Container>
    );
}

export default HomePage;