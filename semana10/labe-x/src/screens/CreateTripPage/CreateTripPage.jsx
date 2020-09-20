import Axios from 'axios';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { baseURL } from '../../constans';
import useForm from '../../hooks/useForm';
import { goBack, goToAdminListTripsPage, goToHomePage, goToLoginPage } from '../../router/goToPages'
import { MainContainer, ButtonWrapper, StandardButton, StandardForm, InputWrapper, ShortTextInput, LongTextInput, SelectInput, DateInput, NumberInput, StandardLabel, SecondaryButton  } from '../../styles'

const CreateTripPage = () => {
    const history = useHistory();

    const {form, onChange, resetState} = useForm({
      tripName: "",
      planet: "",
      tripDate: "",
      tripDescription: "",
      tripDuration: 0
  })

    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (!token) {
        goToLoginPage(history)
      }
  }, [history]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value)
  }

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
        <MainContainer>
            <ButtonWrapper>
                <StandardButton onClick={() => goBack(history)}>voltar</StandardButton>
                <StandardButton onClick={() => goToHomePage(history)}>home</StandardButton>
            </ButtonWrapper>

            <StandardForm onSubmit={handleSubmission}>
                <ShortTextInput 
                  placeholder={"Nome da viagem"} 
                  name={"tripName"}
                  value={form.tripName} 
                  onChange={handleInputChange} 
                  type="text"  
                  pattern="[A-Za-z]{5,}" 
                  required 
                  />
                <InputWrapper>
                  <StandardLabel>Para onde?</StandardLabel>
                  <SelectInput placeholder={"Planeta destino"} name={"planet"} value={form.planet} onChange={handleInputChange} required>
                    <option value="mercúrio">Mercúrio</option>
                    <option value="vênus">Vênus</option>
                    <option value="terra">Terra</option>
                    <option value="marte">Marte</option>
                    <option value="júpiter">Júpiter</option>
                    <option value="saturno">Saturno</option>
                    <option value="urano">Urano</option>
                    <option value="netuno">Netuno</option>
                    <option value="plutão">Plutão</option>
                  </SelectInput>
                </InputWrapper>
                <InputWrapper>
                  <StandardLabel>Quando?</StandardLabel>
                  <DateInput placeholder={"Data"} name={"tripDate"} value={form.tripDate} onChange={handleInputChange} type="date" required />
                </InputWrapper>
                <LongTextInput placeholder={"Descrição"} name={"tripDescription"} value={form.tripDescription} onChange={handleInputChange} type="text" pattern="[A-Za-z0-9]{30,}" required />
                <NumberInput placeholder={"Duração (dias)"} name={"tripDuration"} value={form.tripDuration} onChange={handleInputChange} type="number" min="50" required />
                <SecondaryButton>Criar</SecondaryButton>
            </StandardForm>
        </MainContainer>
     );
}
 
export default CreateTripPage;