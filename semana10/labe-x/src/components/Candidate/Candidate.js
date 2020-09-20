import React from 'react';
import {LetterButton, FlexDiv} from './styles'

const Candidate = (props) => {

    const handleClick = (id, boolean) => {
        props.candidateFeedback(id, boolean)
    }

    return ( 
        <FlexDiv>
            <p>{props.name}</p>
            <LetterButton onClick={() => handleClick(props.id, true)} style={{ color: "#04BF9D" }}>aprovar  </LetterButton>
            <LetterButton onClick={() => handleClick(props.id, false)} style={{ color: "#732103" }}>rejeitar</LetterButton>
        </FlexDiv>
     );
}
 
export default Candidate;