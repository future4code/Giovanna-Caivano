import Axios from 'axios';
import React, { useState } from 'react';
import { Container } from './styles'
import { baseURL } from '../../constants'
import { TaskContainer } from '../TaskContainer/TaskContainer';


const NewTaskContainer = () => {
    const [ inputValue, setInputValue ] = useState("")
    const [ dayValue, setDayValue ] = useState("domingo")

    const handleDayChange = (event) => {
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
            <TaskContainer 
                title={"nova tarefa"}
                placeholder={"Nome da tarefa"}
                inputValue={inputValue} 
                dayValue={dayValue} 
                handleInputChange={handleInputChange} 
                handleDayChange={handleDayChange} 
                createTask={createTask}
                buttonName={"criar"}
            />
        </Container>
     );
}
 
export default NewTaskContainer;