import React, { useEffect, useState } from 'react';
import { Container } from './styles'
import {baseURL} from '../../constants'
import Axios from 'axios';

const TaskListContainer = () => {
    const [ taskArray, setTaskArray ] = useState([])

    const sendTaskListRequest = () => {
        Axios.get(baseURL)
        .then((response) => {
            setTaskArray(response.data)
        }).catch((err) => {
            console.log(err)
        })


    }

    useEffect(() => {
        sendTaskListRequest()
    })    

    return ( 
        <Container>
            <div data-testid="day">
                <h4>Domingo</h4>
                <ul>{taskArray.map((task) => { return task.day === "domingo" && <li>{task.text}</li> })}</ul>
            </div>
            <div data-testid="day">
                <h4>Segunda-feira</h4>
                <ul>{taskArray.map((task) => { return task.day === "segunda" && <li>{task.text}</li> })}</ul>
            </div>
            <div data-testid="day">
                <h4>Terça-feira</h4>
                <ul>{taskArray.map((task) => { return task.day === "terça" && <li>{task.text}</li> })}</ul>
            </div>
            <div data-testid="day">
                <h4>Quarta-feira</h4>
                <ul>{taskArray.map((task) => { return task.day === "quarta" && <li>{task.text}</li> })}</ul>
            </div>
            <div data-testid="day">
                <h4>Quinta-feira</h4>
                <ul>{taskArray.map((task) => { return task.day === "quinta" && <li>{task.text}</li> })}</ul>
            </div>
            <div data-testid="day">
                <h4>Sexta-feira</h4>
                <ul>{taskArray.map((task) => { return task.day === "sexta" && <li>{task.text}</li> })}</ul>
            </div>
            <div data-testid="day">
                <h4>Sábado</h4>
                <ul>{taskArray.map((task) => { return task.day === "sábado" && <li>{task.text}</li> })}</ul>
            </div>
        </Container>
     );
}
 
export default TaskListContainer;