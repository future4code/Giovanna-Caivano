import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { baseURL } from '../../constans';
import useProtectedPage from '../../hooks/useProtectedPage';
import { goBack, goToHomePage, goToTripDetailsPage, goToCreateTripPage } from '../../router/goToPages';
import { MainContainer, ButtonWrapper, StandardButton, SecondaryButton, ListContainer, ListHeading, Item } from '../../styles'


const AdminListTripsPage = () => {
    const history = useHistory();
    const [ tripsList, setTripsList ] = useState([]);

    const getTrips = () => {
        Axios.get(`${baseURL}/trips`)
        .then((response) => {
            setTripsList(response.data.trips)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getTrips()
    })

    useProtectedPage(getTrips)

    return ( 
        <MainContainer>
            <ButtonWrapper>
                <StandardButton onClick={() => goBack(history)}>voltar</StandardButton>
                <StandardButton onClick={() => goToHomePage(history)}>home</StandardButton>
                <StandardButton onClick={() => goToCreateTripPage(history)}>+ viagem</StandardButton>
            </ButtonWrapper>

            <ListContainer>
                <ListHeading>Lista de Viagens</ListHeading>
                
                {tripsList.map((trip) => {
                    return <Item key={trip.id}>{trip.name} <SecondaryButton onClick={() => goToTripDetailsPage(history, trip.id)}>ver mais</SecondaryButton></Item>
                })}
            </ListContainer>

            
        </MainContainer>
     );
}
 
export default AdminListTripsPage;