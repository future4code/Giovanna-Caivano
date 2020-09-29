import React from 'react';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { IconWrapper } from '../../components/PostCard/styled';
import { CardActions, CardContent, IconButton, Typography } from '@material-ui/core';

const CommentBox = (props) => {
    const {id, username, text, votesCount, voteHandler} = props

    return ( 
        <CardContent>
            <Typography variant={'body1'} color={'textSecondary'} component={'p'}>
                {username}
            </Typography>
            <Typography variant={'body2'} color={'textSecondary'} component={'p'}>
                {text}
            </Typography>
            <CardActions>
                <IconWrapper>
                    <IconButton aria-label="voto positivo" onClick={() => voteHandler(id, 1)}>
                        <AddBoxIcon/>
                    </IconButton>
                    <Typography variant="body2" color="textPrimary" component="p">
                        {votesCount}
                    </Typography>
                    <IconButton aria-label="voto negativo" onClick={() => voteHandler(id, -1)}>
                        <IndeterminateCheckBoxIcon/>
                    </IconButton>
                </IconWrapper>
            </CardActions>
        </CardContent>
     );
}
 
export default CommentBox;