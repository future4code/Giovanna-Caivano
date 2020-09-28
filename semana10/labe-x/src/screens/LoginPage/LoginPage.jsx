import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { goToHomePage, goBack, goToAdminListTripsPage, goToLoginPage } from '../../router/goToPages';
import { baseURL } from '../../constans'
import { MainContainer, ButtonWrapper, InputWrapper, ShortTextInput, SecondaryButton, StandardButton } from '../../styles';
import { LoginForm } from './styles'

const LoginPage = () => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
    
        if (token) {
          goToAdminListTripsPage(history)
        }
      }, [history]);
    
    const handleEmailChange = (event) => {
        setEmailValue(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value)
    }

    const handleLogin = () => {
        const body = {
            email: emailValue,
            password: passwordValue
        }

        Axios.post(`${baseURL}/login`, body).then((response) => {
            localStorage.setItem("token", response.data.token);
            response.status === 200 ? goToAdminListTripsPage(history) : goToLoginPage(history)
        }).catch((error) => {
            console.log(error)
        })
    }

    return ( 
        <MainContainer>
            <ButtonWrapper>
                <StandardButton onClick={() => goToHomePage(history)}>home</StandardButton>
                <StandardButton onClick={() => goBack(history)}>voltar</StandardButton>
            </ButtonWrapper>
            <LoginForm>
                <ShortTextInput placeholder={"e-mail"} type={"text"} value={emailValue} onChange={handleEmailChange}/>
                <ShortTextInput placeholder={"senha"} type={"password"} value={passwordValue} onChange={handlePasswordChange}/>
                <SecondaryButton onClick={handleLogin}>entrar</SecondaryButton>
            </LoginForm>
        </MainContainer>
        
     );
}
 
export default LoginPage;