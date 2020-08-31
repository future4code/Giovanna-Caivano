//dependencies
import React from 'react'

export default function TrackCard(props) {

    return(
        <div>
            <span>{props.artist}: "{props.name}" - disponível em: "{props.src}"</span>
        </div>
        )
}