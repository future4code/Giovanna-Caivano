import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, CircularProgress, TextField } from '@material-ui/core';
import { goToPost } from '../../routes/Coordinator';
import useForm from '../../hooks/useForm';
import { createComment } from '../../services/posts';
import { CommentFormBox } from './styled'

const CommentForm = (props) => {
    const {postId} = props
    const [form, handleInputChange, resetState] = useForm({ text: ''})
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    const onClickCreate = (event) => {
        event.preventDefault()
        const element = document.getElementById('comment-form')
        const isValid = element.checkValidity()
        element.reportValidity()
        if(isValid){
            createComment(postId, form, history, setIsLoading)
            resetState()
            goToPost(history, postId)
        }
    }

    return ( 
        <CommentFormBox id='comment-form'>
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
                {isLoading ? <CircularProgress color={'inherit'} size={24}/> : <>comentar</>}
            </Button>
        </CommentFormBox>
     );
}
 
export default CommentForm;
