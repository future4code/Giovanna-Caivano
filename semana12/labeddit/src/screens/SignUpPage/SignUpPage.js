import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Container, Avatar, Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

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
    }
  }));

const SignUpPage = () => {
    const classes = useStyles();

    return ( 
        <Container className={classes.container} maxWidth="xs">
            <Avatar className={classes.avatar}>
            <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Faça seu cadastro!
            </Typography>
            <form className={classes.form}>
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nome de usuário"
                name="name"
                autoComplete="name"
                autoFocus
            />
                <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
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
                cadastrar
            </Button>
            </form>
        </Container>
     );
}
 
export default SignUpPage;