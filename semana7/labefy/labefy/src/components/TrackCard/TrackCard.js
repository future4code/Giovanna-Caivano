//dependencies
import React from 'react'
//styles
import { Card, Typography, CardContent } from '@material-ui/core'

export default function TrackCard(props) {

    return(
        <Card>
            <CardContent bgcolor="#4d6b67">
                <Typography variant="body2">{props.artist}: "{props.name}" - disponível em: "{props.src}"</Typography>
            </CardContent>
        </Card>
        )
}