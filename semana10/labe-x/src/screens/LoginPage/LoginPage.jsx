import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToHomePage, goToTripDetailsPage, goBack } from '../../router/goToPages';

const LoginPage = () => {
    const history = useHistory();
    
    return ( 
        <div>
            <button onClick={() => goToHomePage(history)}>home</button>
            <button onClick={() => goBack(history)}>voltar</button>
            <div> inputs controlados </div>
            <button onClick={() => goToTripDetailsPage(history)}>entrar</button>
        </div>
        
     );
}
 
export default LoginPage;