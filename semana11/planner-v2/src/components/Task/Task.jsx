import React from 'react';
import {DeleteButton, TaskItem} from './style'

const Task = (props) => {

    return ( 
        <li>
            <TaskItem onClick={props.editTask}>{props.text}</TaskItem>
            <DeleteButton onClick={props.deleteTask}>apagar</DeleteButton>
        </li>
     );
}
 
export default Task;