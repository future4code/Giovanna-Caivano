import React from 'react'
import './HobbyGrid.css'

function HobbyGrid(props) {
    return (
        <div className="hobby">
            <p>{props.name}</p>
        </div>
    )
}

export default HobbyGrid;