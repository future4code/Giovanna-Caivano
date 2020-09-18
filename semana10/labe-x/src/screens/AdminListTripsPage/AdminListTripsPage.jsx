import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { baseURL } from '../../constans';
import useProtectedPage from '../../hooks/useProtectedPage';
import { goBack, goToHomePage, goToTripDetailsPage, goToCreateTripPage } from '../../router/goToPages';

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
        <div>
            <button onClick={() => goToHomePage(history)}>home</button>
            <button onClick={() => goBack(history)}>voltar</button>

            <button onClick={() => goToCreateTripPage(history)}>+ viagem</button>
            <h4>Lista de Viagens</h4>
            {tripsList.map((trip) => {
                return <div key={trip.id}>{trip.name} <button onClick={() => goToTripDetailsPage(history, trip.id)}>detalhes</button></div>
            })}

            
        </div>
     );
}
 
export default AdminListTripsPage;