import React from 'react';
import { Container } from './styles'

export const TaskContainer = (props) => {
    return ( 
        <Container>
            <h3>{props.title}</h3>
            <input value={props.inputValue} placeholder={props.placeholder} type="text" onChange={props.handleInputChange}/>
            <select value={props.dayValue} onChange={props.handleDayChange} data-testid={props.testid}>
                <option value="domingo">Domingo</option>
                <option value="segunda">Segunda-feira</option>
                <option value="terça">Terça-feira</option>
                <option value="quarta">Quarta-feira</option>
                <option value="quinta">Quinta-feira</option>
                <option value="sexta">Sexta-feira</option>
                <option value="sábado">Sábado</option>
            </select>
    <button onClick={props.createTask}>{props.buttonName}</button>
        </Container>
     );
}
