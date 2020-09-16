import Axios from 'axios';
import React, {  useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { baseURL } from '../../constans';
import useProtectedPage from '../../hooks/useProtectedPage';
import { goBack, goToHomePage } from '../../router/goToPages'

const TripDetailsPage = () => {
    const history = useHistory();
    const pathParams = useParams();
    
    const [trip, setTrip] = useState({})
    
    const getTripDetail = () => {
      Axios.get(`${baseURL}/trip/${pathParams.id}`, 
      { 
        headers: { 
          auth: localStorage.getItem("token") 
        }})
        .then((response) => {
          setTrip(response.data.trip)
        })
        .catch((error) => {console.log(error)})
    }
    
    useProtectedPage(getTripDetail)

    return ( 
        <div>
            <button onClick={() => goBack(history)}>voltar</button>
            <button onClick={() => goToHomePage(history)}>home</button>
            
            <div>
              <p>Viagem: {trip.name}</p>
              <p>Destino: {trip.planet}</p>
              <p>Data: {trip.date}</p>
              <p>Descrição: {trip.description}</p>
              <p>Duração: {trip.durationInDays}</p>
              <p>Candidatos: {trip.candidates}</p>
            </div>
        </div>
     );
}
 
export default TripDetailsPage;
