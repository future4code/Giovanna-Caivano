import Axios from 'axios';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { baseURL } from '../../constans';
import useForm from '../../hooks/useForm';
import { goBack, goToAdminListTripsPage, goToHomePage, goToLoginPage } from '../../router/goToPages'

const CreateTripPage = () => {
    const history = useHistory();

    const { form, onChange, resetState } = useForm({
      tripName: "",
      planet: "",
      tripDate: "",
      tripDescription: "",
      tripDuration: 0
    })

    const handleInputChange = (event) => {
      const {name, value} = event.target
      onChange(name, value)
    }

    useEffect(() => {
      const token = localStorage.getItem("token");
    
        if (!token) {
          goToLoginPage(history)
        }
    }, [history])

    const postTrip = () => {
      const body = {
        name: form.tripName,
        planet: form.planet,
        date: form.tripDate,
        description: form.tripDescription,
        durationInDays: form.tripDuration
      }
      
      Axios.post(`${baseURL}/trips`, body, 
      {
        headers : {
          "Content-type": "application/json",
          auth: localStorage.getItem("token")
        }}).then(response => {
          alert("Viagem cadastrada com sucesso")
        }).then(
          goToAdminListTripsPage(history)
        ).catch(error => console.log(error))
    }

    const handleSubmission = (event) => {
        event.preventDefault();
        postTrip();
        resetState();
    }


    return ( 
        <div>
            <button onClick={() => goBack(history)}>voltar</button>
            <button onClick={() => goToHomePage(history)}>home</button>
            <form onSubmit={handleSubmission}>
                <input placeholder={"Nome da viagem"} value={form.tripName} onChange={handleInputChange} type="text" pattern="[A-Za-z]{5,}" required />
                <select placeholder={"Planeta destino"} value={form.planet} onChange={handleInputChange} required>
                  <option value="mercúrio">Mercúrio</option>
                  <option value="vênus">Vênus</option>
                  <option value="terra">Terra</option>
                  <option value="marte">Marte</option>
                  <option value="júpiter">Júpiter</option>
                  <option value="saturno">Saturno</option>
                  <option value="urano">Urano</option>
                  <option value="netuno">Netuno</option>
                  <option value="plutão">Plutão</option>
                </select>
                <input placeholder={"Data"} value={form.tripDate} onChange={handleInputChange} type="date" required />
                <input placeholder={"Descrição"} value={form.tripDescription} onChange={handleInputChange} type="text" pattern="[A-Za-z]{30,}" required />
                <input placeholder={"Duração (dias)"} value={form.tripDuration} onChange={handleInputChange} type="number" min="50" required />
                <button>Criar</button>
            </form>
        </div>
     );
}
 
export default CreateTripPage;