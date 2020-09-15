import React from 'react';
import { useHistory } from 'react-router-dom';
import { goBack } from '../../router/goToPages'

const TripDetailsPage = () => {
    const history = useHistory();

    return ( 
        <div>
            <button onClick={() => goBack(history)}>voltar</button>
            detalhes da viagem - aprovação do usuário
        </div>
     );
}
 
export default TripDetailsPage;