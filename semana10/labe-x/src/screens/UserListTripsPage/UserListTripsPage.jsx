import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import {baseURL} from '../../constans'
import { goBack, goToApplicationFormPage, goToHomePage } from '../../router/goToPages';
import { useHistory } from 'react-router-dom';
import { MainContainer, ButtonWrapper, StandardButton, ListContainer, ListHeading } from '../../styles'
import { Item } from './styles'

const UserListTripsPage = () => {
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
        getTrips();
    }, [])
    
    
    return ( 
        <MainContainer>
            <ButtonWrapper>
                <StandardButton onClick={() => goBack(history)}>voltar</StandardButton>
                <StandardButton onClick={() => goToHomePage(history)}>home</StandardButton>
            </ButtonWrapper>


            <ListContainer>
                <ListHeading>Escolha a viagem que quer se candidatar!</ListHeading>
                {tripsList.map((trip) => {
                return <Item key={trip.id} onClick={() => goToApplicationFormPage(history, trip.id)}>{trip.name}</Item>
                })}
            </ListContainer>
        </MainContainer>
     );
}
 
export default UserListTripsPage;