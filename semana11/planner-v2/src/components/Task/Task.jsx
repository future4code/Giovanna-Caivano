import React from 'react';

const Task = (props) => {

    return ( 
        <li onClick={props.editTask}>
            {props.text}
            <button onClick={props.deleteTask}>apagar</button>
            <button onClick={props.addStyle}>done</button>
        </li>
     );
}
 
export default Task;