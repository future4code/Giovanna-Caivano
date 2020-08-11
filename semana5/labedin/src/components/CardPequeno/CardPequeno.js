import React from 'react';
import './CardPequeno.css'

export default function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.image }/>
            <div>
                <p className="bold-p">{ props.label }</p>
                <p>{ props.content }</p>
            </div>
        </div>
    )
}