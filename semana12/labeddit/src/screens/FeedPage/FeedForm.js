import React, { useState } from 'react';
import { Button, CircularProgress, TextField } from '@material-ui/core';
import useForm from '../../hooks/useForm'
import { createPost } from '../../services/posts'

const FeedForm = (props) => {
    const [form, handleInputChange, resetState] = useForm({ title: '', text: ''})
    const [isLoading, setIsLoading] = useState(false)
    
    const onClickCreate = (event) => {
        event.preventDefault()
        const element = document.getElementById('feed-form')
        const isValid = element.checkValidity()
        element.reportValidity()
        if(isValid){
            createPost(form, setIsLoading, props.getAllPosts)
            resetState()
        }
    }

    return ( 
        <form id='feed-form'>
            <TextField
                value={form.title}
                onChange={handleInputChange}
                margin="normal"
                required
                fullWidth
                id="title"
                label="Título do post"
                name="title"
                />
            <TextField
                value={form.text}
                onChange={handleInputChange}
                margin="normal"
                required
                fullWidth
                id="text"
                label="Escreva aqui seu post"
                name="text"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={onClickCreate}
                >
                    {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>postar</>}
                </Button>
        </form>
     );
}
 
export default FeedForm;