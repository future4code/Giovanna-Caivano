import React, { useEffect, useState } from 'react';
import { Container } from './styles'
import { baseURL } from '../../constants'
import Axios from 'axios';
import Task from '../Task/Task';

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

    const addStyle = () => {
        //adiciona linethrough no li
    }

    const deleteTask = (id) => {
        Axios.delete(`${baseURL}/${id}`)
        .then((response) => {
            sendTaskListRequest()
        }).catch((err) => {
            console.log(err)
        })
    }

    return ( 
        <Container>
            <div data-testid="day">
                <h4>Domingo</h4>
                <ul>{taskArray.map((task) => { return task.day === "domingo" && <Task addStyle={addStyle} deleteTask={() => deleteTask(task.id)} text={task.text}/> })}</ul>
            </div>
            <div data-testid="day">
                <h4>Segunda-feira</h4>
                <ul>{taskArray.map((task) => { return task.day === "segunda" && <Task addStyle={addStyle} deleteTask={() => deleteTask(task.id)} text={task.text}/> })}</ul>
            </div>
            <div data-testid="day">
                <h4>Terça-feira</h4>
                <ul>{taskArray.map((task) => { return task.day === "terça" && <Task data-testid={task.id} addStyle={addStyle} deleteTask={() => deleteTask(task.id)} text={task.text}/> })}</ul>
            </div>
            <div data-testid="day">
                <h4>Quarta-feira</h4>
                <ul>{taskArray.map((task) => { return task.day === "quarta" && <Task addStyle={addStyle} deleteTask={() => deleteTask(task.id)} text={task.text}/> })}</ul>
            </div>
            <div data-testid="day">
                <h4>Quinta-feira</h4>
                <ul>{taskArray.map((task) => { return task.day === "quinta" && <Task addStyle={addStyle} deleteTask={() => deleteTask(task.id)} text={task.text}/> })}</ul>
            </div>
            <div data-testid="day">
                <h4>Sexta-feira</h4>
                <ul>{taskArray.map((task) => { return task.day === "sexta" && <Task addStyle={addStyle} deleteTask={() => deleteTask(task.id)} text={task.text}/> })}</ul>
            </div>
            <div data-testid="day">
                <h4>Sábado</h4>
                <ul>{taskArray.map((task) => { return task.day === "sábado" && <Task addStyle={addStyle} deleteTask={() => deleteTask(task.id)} text={task.text}/> })}</ul>
            </div>
        </Container>
     );
}
 
export default TaskListContainer;