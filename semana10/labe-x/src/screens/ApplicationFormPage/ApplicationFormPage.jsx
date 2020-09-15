import React from 'react';
import { useHistory } from 'react-router-dom';
import { goBack } from '../../router/goToPages'

const ApplicationFormPage = () => {
    const history = useHistory();

    return ( 
        <div>
            <button onClick={() => goBack(history)}>voltar</button>
            Form para cadastro do usuário
        </div>
     );
}
 
export default ApplicationFormPage;