import Axios from 'axios';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { baseURL } from '../../constans';
import useForm from '../../hooks/useForm';
import { goBack, goToHomePage } from '../../router/goToPages'
import { MainContainer, ButtonWrapper, StandardButton, StandardForm, ShortTextInput, LongTextInput, NumberInput, MainCTA } from '../../styles'


const ApplicationFormPage = () => {
    const history = useHistory();
    const pathParams = useParams()
    const {form, onChange, resetState} = useForm({
        nameValue: "",
        ageValue: 0,
        textValue: "",
        professionValue: "",
        countryValue: ""
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChange(name, value)
    }
    
    const postSubscription = (id) => {
        const body = {
            name: form.nameValue,
            age: form.ageValue,
            applicationText: form.textValue,
            profession: form.professionValue,
            country: form.countryValue
        }

        Axios.post(`${baseURL}/trips/${id}/apply`, body).then((response) => {
            response.status === 200 ? alert("Cadastro feito com sucesso!") : alert("Algo deu errado! Por favor, tente novamente!")
        }).catch((error) => {
            console.log(error)
        })
    }

    const handleSubmission = (event) => {
        event.preventDefault();
        postSubscription(pathParams.id)
        resetState()
    }

    return ( 
        <MainContainer>
            <ButtonWrapper>
                <StandardButton onClick={() => goBack(history)}>voltar</StandardButton>
                <StandardButton onClick={() => goToHomePage(history)}>home</StandardButton>
            </ButtonWrapper>

            <StandardForm onSubmit={handleSubmission}>
                <ShortTextInput 
                    placeholder={"Nome"} 
                    value={form.nameValue} 
                    name="nameValue"
                    onChange={handleInputChange}
                    type="text"
                    pattern="[A-Za-z]{3,}"
                    title="No mínimo 3 letras."
                    required
                />
                <NumberInput 
                    placeholder={"Idade"} 
                    value={form.ageValue} 
                    name="ageValue"
                    onChange={handleInputChange}
                    type="number"
                    min="18"
                    required
                />
                <LongTextInput 
                    placeholder={"Por que devemos escolher você?"} 
                    value={form.textValue} 
                    name="textValue"
                    onChange={handleInputChange}
                    type="text"
                    pattern="[A-Za-z]{30,}"
                    required
                    />
                <ShortTextInput 
                    placeholder={"Profissão"} 
                    value={form.professionValue} 
                    name="professionValue"
                    onChange={handleInputChange}
                    type="text"
                    // pattern="[A-Za-z]"
                    required
                />
                <ShortTextInput 
                    placeholder={"País"} 
                    value={form.countryValue} 
                    name="countryValue"
                    onChange={handleInputChange}
                />
                <MainCTA>inscrever-se</MainCTA>
            </StandardForm>
        </MainContainer>
     );
}
 
export default ApplicationFormPage;