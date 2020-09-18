import React from 'react';

const Candidate = (props) => {

    const handleClick = (id, boolean) => {
        props.candidateFeedback(id, boolean)
    }

    return ( 
        <div>
            <p>{props.name}</p>
            <span onClick={() => handleClick(props.id, true)}>aprovar  </span>
            <span onClick={() => handleClick(props.id, false)}>rejeitar</span>
        </div>
     );
}
 
export default Candidate;