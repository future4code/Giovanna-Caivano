import Axios from 'axios';
import React, {  useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Candidate from '../../components/Candidate/Candidate';
import { baseURL } from '../../constans';
import useProtectedPage from '../../hooks/useProtectedPage';
import { goBack, goToHomePage } from '../../router/goToPages'
import { MainContainer, ButtonWrapper, StandardButton, Item, ListContainer } from '../../styles'


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
        <MainContainer>
            <ButtonWrapper>
                <StandardButton onClick={() => goBack(history)}>voltar</StandardButton>
                <StandardButton onClick={() => goToHomePage(history)}>home</StandardButton>
            </ButtonWrapper>

            <ListContainer>
              <Item><span>Viagem: </span>{trip.name}</Item>
              <Item><span>Destino: </span>{trip.planet}</Item>
              <Item><span>Data: </span>{trip.date}</Item>
              <Item><span>Descrição: </span>{trip.description}</Item>
              <Item><span>Duração: </span>{trip.durationInDays}</Item>
              <Item><span>Candidatos: </span> {tripCandidates.map((candidate) => { return <Candidate key={candidate.id} name={candidate.name} id={candidate.id} candidateFeedback={sendCandidateResponse}/>})}
              </Item>
              <Item><span>Viajantes aprovados: </span>{confirmedTravelers.map((traveler) => { return <div key={traveler.id}>{traveler.name}</div>})}</Item>
            </ListContainer>
        </MainContainer>
     );
}
 
export default TripDetailsPage;
