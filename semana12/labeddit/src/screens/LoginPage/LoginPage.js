import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Avatar, Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { goToSignUp } from '../../routes/Coordinator';
import LoginForm from './LoginForm';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    text: {
        marginTop: theme.spacing(1),
    }
  }));

const LoginPage = (props) => {
    useUnprotectedPage()

    const classes = useStyles();
    const history = useHistory();

    return ( 
        <Container className={classes.container} maxWidth="xs">
            <Avatar className={classes.avatar}>
                <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Faça seu login!
            </Typography>
            <LoginForm setButtonName={props.setButtonName}/>
            <Typography className={classes.text} textSecondary>ou</Typography>
            <Button
                type="submit"
                color="secondary"
                onClick={() => goToSignUp(history)}
                fullWidth
            >
                novo aqui? cadastre-se
            </Button>
        </Container>
     );
}
 
export default LoginPage;