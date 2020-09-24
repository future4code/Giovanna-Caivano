import Axios from 'axios';
import React, { useState } from 'react';
import { Container } from './styles'
import { baseURL } from '../../constants'

const NewTaskContainer = () => {
    const [ inputValue, setInputValue ] = useState("")
    const [ dayValue, setDayValue ] = useState("domingo")

    const handleDayChange = (event) => {
        console.log(event.target.value)
        setDayValue(event.target.value)
    }
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const createTask = () => {
        const body = {
            "text": inputValue,
            "day": dayValue
        }

        Axios.post(baseURL, body).then((response) => {console.log(response)}).catch((err) => {console.log(err)})
        setInputValue("")
    }


    return ( 
        <Container>
            <h3>nova tarefa</h3>
            <input value={inputValue} placeholder="Nome da tarefa" type="text" onChange={handleInputChange}/>
            <select value={dayValue} onChange={handleDayChange}>
                <option value="domingo">Domingo</option>
                <option value="segunda">Segunda-feira</option>
                <option value="terça">Terça-feira</option>
                <option value="quarta">Quarta-feira</option>
                <option value="quinta">Quinta-feira</option>
                <option value="sexta">Sexta-feira</option>
                <option value="sábado">Sábado</option>
            </select>
            <button onClick={createTask}>criar</button>
        </Container>
     );
}
 
export default NewTaskContainer;