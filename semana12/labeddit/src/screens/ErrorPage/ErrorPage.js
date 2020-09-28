import React from 'react';
import { Button, Typography } from '@material-ui/core';
import ErrorShark from '../../assets/error-shark.png'
import { MainContainer, ErrorImg } from './styled'
import { goToFeed } from '../../routes/Coordinator';
import { useHistory } from 'react-router-dom';

const ErrorPage = () => {
    const history = useHistory()

    return ( 
        <MainContainer>
            <ErrorImg alt={'erro 404'} src={ErrorShark}/>
            <Typography color={'primary'} variant={'h4'} align={'center'} gutterBottom>Hmmmm... não encontramos esta página!</Typography>
            <Button variant="contained" onClick={() => goToFeed(history)}>voltar</Button>
        </MainContainer>
     );
}
 
export default ErrorPage;