import React from 'react'
import styled from 'styled-components'

const MainTitle = styled.h1`
    font-size: 30px;
    text-transform: uppercase;
`

class TitleH1 extends React.Component {
    
    render() {
        return (
        <MainTitle>{this.props.titulo}</MainTitle>
        )
    }
}

export default TitleH1;