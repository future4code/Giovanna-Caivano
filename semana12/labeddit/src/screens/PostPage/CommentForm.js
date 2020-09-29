import React from 'react';
import { Button, TextField } from '@material-ui/core';
import useForm from '../../hooks/useForm';
import { createComment } from '../../services/posts';

const CommentForm = (props) => {
    const {postId} = props
    const [form, handleInputChange, resetState] = useForm({ text: ''})

    const onClickCreate = (event) => {
        const token = localStorage.getItem('token')

        event.preventDefault()
        const element = document.getElementById('comment-form')
        const isValid = element.checkValidity()
        element.reportValidity()
        if(isValid){
            createComment(token, postId, form)
            resetState()
        }
    }

    return ( 
        <form id='comment-form'>
            <TextField
                value={form.text}
                onChange={handleInputChange}
                margin="normal"
                required
                fullWidth
                id="text"
                label="Escreva aqui seu comentário"
                name="text"
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={onClickCreate}
            >
                comentar
            </Button>
        </form>
     );
}
 

export default CommentForm;