import Axios from 'axios';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { baseURL } from '../../constans';
import { goBack, goToHomePage } from '../../router/goToPages'

const ApplicationFormPage = () => {
    const history = useHistory();
    const pathParams = useParams()

    const [nameValue, setNameValue] = useState("")
    const [ageValue, setAgeValue] = useState("")
    const [textValue, setTextValue] = useState("")
    const [professionValue, setProfessionValue] = useState("")
    const [countryValue, setCountryValue] = useState("")

    const handleName = (event) => {
        setNameValue(event.target.value)
    }
    const handleAge = (event) => {
        setAgeValue(event.target.value)
    }
    const handleText = (event) => {
        setTextValue(event.target.value)
    }
    const handleProfession = (event) => {
        setProfessionValue(event.target.value)
    }
    const handleCountry = (event) => {
        setCountryValue(event.target.value)
    }
    
    const handleClick = (id) => {
        const body = {
            name: nameValue,
            age: ageValue,
            applicationText: textValue,
            profession: professionValue,
            country: countryValue
        }

        Axios.post(`${baseURL}/trips/${id}/apply`, body, 
        {
            headers: { 
                "Content-Type": "application/json"
            }
        }).then((response) => {
            console.log(response)
            alert("Cadastro feito com sucesso!")
        }).catch((error) => {
            console.log(error)
        })
    }

    return ( 
        <div>
            <button onClick={() => goBack(history)}>voltar</button>
            <button onClick={() => goToHomePage(history)}>home</button>
            <form>
                <input placeholder={"Nome"} value={nameValue} onChange={handleName}/>
                <input placeholder={"Idade"} value={ageValue} onChange={handleAge}/>
                <input placeholder={"Por que devemos escolher você?"} value={textValue} onChange={handleText}/>
                <input placeholder={"Profissão"} value={professionValue} onChange={handleProfession}/>
                <input placeholder={"País"} value={countryValue} onChange={handleCountry}/>
                <button onClick={() => handleClick(pathParams.id)}>inscrever-se</button>
            </form>
        </div>
     );
}
 
export default ApplicationFormPage;