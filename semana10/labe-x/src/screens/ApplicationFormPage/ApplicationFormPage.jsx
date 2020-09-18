import Axios from 'axios';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { baseURL } from '../../constans';
import useForm from '../../hooks/useForm';
import { goBack, goToHomePage } from '../../router/goToPages'

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

        Axios.post(`${baseURL}/trips/${id}/apply`, body, 
        {
            headers: { 
                "Content-Type": "application/json"
            }
        }).then((response) => {
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
        <div>
            <button onClick={() => goBack(history)}>voltar</button>
            <button onClick={() => goToHomePage(history)}>home</button>

            <form onSubmit={handleSubmission}>
                <input 
                    placeholder={"Nome"} 
                    value={form.nameValue} 
                    name="nameValue"
                    onChange={handleInputChange}
                    type="text"
                    pattern="[A-Za-z]{3,}"
                    title="No mínimo 3 letras."
                    required
                />
                <input 
                    placeholder={"Idade"} 
                    value={form.ageValue} 
                    name="ageValue"
                    onChange={handleInputChange}
                    type="number"
                    min="18"
                    required
                />
                <input 
                    placeholder={"Por que devemos escolher você?"} 
                    value={form.textValue} 
                    name="textValue"
                    onChange={handleInputChange}
                    type="text"
                    pattern="[A-Za-z]{30,}"
                    required
                    />
                <input 
                    placeholder={"Profissão"} 
                    value={form.professionValue} 
                    name="professionValue"
                    onChange={handleInputChange}
                    type="text"
                    pattern="[A-Za-z]{10,}"
                    required
                />
                <input 
                    placeholder={"País"} 
                    value={form.countryValue} 
                    name="countryValue"
                    onChange={handleInputChange}
                />
                <button>inscrever-se</button>
            </form>
        </div>
     );
}
 
export default ApplicationFormPage;