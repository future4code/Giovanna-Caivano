import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Container, Avatar, Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import { goToSignUp } from '../../routes/Coordinator';
import { useHistory } from 'react-router-dom';

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
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
      display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        width: '150px',
        margin: '5px',
    },
    text: {
        marginTop: theme.spacing(1),
    }
  }));

const LoginPage = () => {
    const classes = useStyles();
    const history = useHistory()

    return ( 
        <Container className={classes.container} maxWidth="xs">
            <Avatar className={classes.avatar}>
            <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Faça seu login!
            </Typography>
            <form className={classes.form}>
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
            >
                entrar
            </Button>
            <Typography className={classes.text} textSecondary>ou</Typography>
            <Button
                type="submit"
                color="secondary"
                className={classes.button}
                onClick={() => goToSignUp(history)}
            >
                cadastre-se
            </Button>
            </form>
        </Container>
     );
}
 
export default LoginPage;