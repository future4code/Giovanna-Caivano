import React from 'react'
import './ComentarioFeito.css'
import '../SecaoComentario/SecaoComentario.js'

export function ComentarioFeito (props) {

        return <div className={'comment-container'}>
		    <p>{props.texto}</p>
	    </div>
}