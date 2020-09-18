import Axios from 'axios';
import React, {  useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Candidate from '../../components/Candidate';
import { baseURL } from '../../constans';
import useProtectedPage from '../../hooks/useProtectedPage';
import { goBack, goToHomePage } from '../../router/goToPages'

const TripDetailsPage = () => {
    const history = useHistory();
    const pathParams = useParams();
    
    const [trip, setTrip] = useState({})
    const [tripCandidates, setTripCandidates] = useState([])
    const [confirmedTravelers, setConfirmedTravelers] = useState([])
    
    const getTripDetail = () => {
      Axios.get(`${baseURL}/trip/${pathParams.id}`, 
      { 
        headers: { 
          auth: localStorage.getItem("token") 
        }})
        .then((response) => {
          setTrip(response.data.trip)
          setTripCandidates(response.data.trip.candidates)
          setConfirmedTravelers(response.data.trip.approved)
        })
        .catch((error) => {console.log(error)})
    }

    const sendCandidateResponse = (candidateId, boolean) => {
      console.log(candidateId, boolean)
      const body = {
        approve: boolean
      }
      Axios.put(`${baseURL}/trips/${pathParams.id}/candidates/${candidateId}/decide`, body,
      {
        headers: {
          auth: localStorage.getItem("token")
        }})
        .then((response) => {
          getTripDetail()
        })
        .catch((error) => {
          console.log(error)
        })
    }
    
    useProtectedPage(getTripDetail)


    return ( 
        <div>
            <button onClick={() => goBack(history)}>voltar</button>
            <button onClick={() => goToHomePage(history)}>home</button>
            
            <div>
              <div><span>Viagem: </span>{trip.name}</div>
              <div><span>Destino: </span>{trip.planet}</div>
              <div><span>Data: </span>{trip.date}</div>
              <div><span>Descrição: </span>{trip.description}</div>
              <div><span>Duração: </span>{trip.durationInDays}</div>
              <div><span>Candidatos: </span> {tripCandidates.map((candidate) => { return <Candidate key={candidate.id} name={candidate.name} id={candidate.id} candidateFeedback={sendCandidateResponse}/>})}
              </div>
              <div><span>Viajantes aprovados: </span>{confirmedTravelers.map((traveler) => { return <div key={traveler.id}>{traveler.name}</div>})}</div>
            </div>
        </div>
     );
}
 
export default TripDetailsPage;
