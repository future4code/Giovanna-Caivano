import React from 'react'
import { RocketGrid, RocketImg, Title, RocketSizeBox, Text } from './styles.js'

export default function RocketCard(props) {
    return(
        <RocketGrid>
            <RocketImg src={props.url}/>
            <Title>{props.name}</Title>
            <RocketSizeBox>
                <p><b>Size:</b></p>
                <p>Height: {props.height} meters</p>
                <p>Weight: {props.weight} kg</p>
            </RocketSizeBox>
            <Text><b>Description:</b> {props.description}</Text>
        </RocketGrid>
    )
}