import React from 'react';
import { useHistory } from 'react-router-dom';
import { goBack } from '../../router/goToPages'

const CreateTripPage = () => {
    const history = useHistory();

    return ( 
        <div>
            <button onClick={() => goBack(history)}>voltar</button>
            Form para criar viagem
        </div>
     );
}
 
export default CreateTripPage;