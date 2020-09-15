import React from 'react';
import { useHistory } from 'react-router-dom';
import { goBack, goToHomePage, goToTripDetailsPage, goToApplicationFormPage, goToUserSubscription, goToCreateTripPage } from '../../router/goToPages';

const ListTripsPage = () => {
    const history = useHistory();

    return ( 
        <div>

            <button onClick={() => goToHomePage(history)}>home</button>
            <button onClick={() => goBack(history)}>voltar</button>
            <div>lista de viagens</div>
            <ul>
                {/* se usuário */}
                <li onClick={() => goToTripDetailsPage(history)}>viagem</li>
                {/* se admin */}
                <li onClick={() => goToApplicationFormPage(history)}>viagem</li>
            </ul>
            {/* se admin */}
            <button onClick={() => goToUserSubscription(history)}>+ usuário</button>
            <button onClick={() => goToCreateTripPage(history)}>+ viagem</button>
        </div>
     );
}
 
export default ListTripsPage;