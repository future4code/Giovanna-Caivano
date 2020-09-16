import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import {baseURL} from '../../constans'
import { goBack, goToApplicationFormPage, goToHomePage } from '../../router/goToPages';
import { useHistory } from 'react-router-dom';

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
        <div>
            <button onClick={() => goBack(history)}>voltar</button>
            <button onClick={() => goToHomePage(history)}>home</button>

            <h4>Lista de Viagens</h4>
            {tripsList.map((trip) => {
                return <div key={trip.id} onClick={() => goToApplicationFormPage(history, trip.id)}>{trip.name}</div>
            })}
        </div>
     );
}
 
export default UserListTripsPage;