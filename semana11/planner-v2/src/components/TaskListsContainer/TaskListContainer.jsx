import React, { useEffect, useState } from 'react';
import { TaskContainer } from '../TaskContainer/TaskContainer';
import { PlannerContainer, BoxWrapper, Box, TaskList } from './styles'
import { baseURL } from '../../constants'
import Axios from 'axios';
import Task from '../Task/Task';

const TaskListContainer = () => {
    const [ taskArray, setTaskArray ] = useState([])
    const [ updateTaskVisibility, setupdateTaskVisibility ] = useState(false)
    const [ editInputValue, setEditInputValue ] = useState("")
    const [ editDayValue, setEditDayValue ] = useState("domingo")
    const [ taskId, setTaskId ] = useState("")

    const weekdayArray = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']

    const sendTaskListRequest = () => {
        Axios.get(baseURL)
        .then((response) => {
            setTaskArray(response.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleEditDayChange = (event) => {
        setEditDayValue(event.target.value)
    }
    const handleEditInputChange = (event) => {
        setEditInputValue(event.target.value)
    }

    useEffect(() => {
        sendTaskListRequest()
    }, [])    

    const editTask = (id) => {
        setupdateTaskVisibility(!updateTaskVisibility)
        setTaskId(id)
    }

    const deleteTask = (id) => {
        Axios.delete(`${baseURL}/${id}`)
        .then((response) => {
            sendTaskListRequest()
        }).catch((err) => {
            console.log(err)
        })
    }

    const sendEditRequest = (id) => {
        const body = {
            "text": editInputValue,
            "day": editDayValue
        }

        Axios.put(`${baseURL}/${id}`, body)
        .then((response) => {
            sendTaskListRequest()
        }).catch((err) => {
            console.log(err)
        })
        setupdateTaskVisibility(false)
    }

    return ( 
        <PlannerContainer>
            <BoxWrapper>
                {updateTaskVisibility && <TaskContainer 
                    title={"editar tarefa"}
                    placeholder={"Novo nome"}
                    inputValue={editInputValue} 
                    dayValue={editDayValue} 
                    handleInputChange={handleEditInputChange} 
                    handleDayChange={handleEditDayChange} 
                    createTask={() => sendEditRequest(taskId)}
                    buttonName={"atualizar"}
                    testid={"taskDay"}
                />}
            </BoxWrapper>
            <BoxWrapper>
                {weekdayArray.map((day) => {
                    return (
                        <Box data-testid="day">
                            <h4>{day}</h4>
                            <TaskList>
                                {taskArray.map((task) => { return (
                                task.day === day && <Task 
                                    data-testid={task.id} 
                                    editTask={() => editTask(task.id)} 
                                    deleteTask={() => deleteTask(task.id)} 
                                    text={task.text}/>
                                )})}
                            </TaskList>
                        </Box>
                    )
                })}
                </BoxWrapper>
        </PlannerContainer>
     );
}
 
export default TaskListContainer;