import Axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { baseURL } from '../../constans';
import useProtectedPage from '../../hooks/useProtectedPage';
import { goBack, goToHomePage } from '../../router/goToPages'

const CreateTripPage = () => {
    const history = useHistory();

    const [ tripName, setTripName ] = useState("");
    const [ planet, setPlanet ] = useState("");
    const [ tripDate, setTripDate ] = useState("");
    const [ tripDescription, setTripDescription ] = useState("");
    const [ tripDuration, setTripDuration ] = useState(0);
    
    const token = localStorage.getItem("token");

    useProtectedPage(() => {})
    
    const handleTripName = (event) => {
      setTripName(event.target.value)
    }
    const handlePlanet = (event) => {
      setPlanet(event.target.value)
    }
    const handleTripDate = (event) => {
      setTripDate(event.target.value)
    }
    const handleTripDescription = (event) => {
      setTripDescription(event.target.value)
    }
    const handleTripDuration = (event) => {
      setTripDuration(event.target.value)
    }

    const handleClick = () => {
      const body = {
        name: tripName,
        planet: planet,
        date: tripDate,
        description: tripDescription,
        durationInDays: tripDuration
      }
      
      Axios.post(`${baseURL}/trips`, body, 
      {
        headers : {
          "Content-type": "application/json",
          auth: token
        }}).then(response => console.log(response)).catch(error => console.log(error))
    }



    return ( 
        <div>
            <button onClick={() => goBack(history)}>voltar</button>
            <button onClick={() => goToHomePage(history)}>home</button>
            <div>
                <input placeholder={"Nome da viagem"} value={tripName} onChange={handleTripName}/>
                <input placeholder={"Planeta destino"} value={planet} onChange={handlePlanet}/>
                <input placeholder={"Data"} value={tripDate} onChange={handleTripDate}/>
                <input placeholder={"Descrição"} value={tripDescription} onChange={handleTripDescription}/>
                <input placeholder={"Duração (dias)"} value={tripDuration} onChange={handleTripDuration}/>
                <button onClick={() => handleClick()}>Criar</button>
            </div>
        </div>
     );
}
 
export default CreateTripPage;