import React, { useState } from 'react';
import { Card, CardActions, CardContent, IconButton, makeStyles, Typography } from '@material-ui/core';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { IconWrapper } from './styled'
import useProtectedPage from '../../hooks/useProtectedPage';
import { sendVote } from '../../services/posts';
import { goToPost } from '../../routes/Coordinator';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '10px',
    },
    action: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    comment: {
        marginRight: '8px',
    }
}))

const PostCard = (props) => {
    useProtectedPage()
    const history = useHistory()

    const [vote, setVote] = useState(0)
    const { username, postTitle, postText, votesCount, commentsCount, postId } = props
    const classes = useStyles();

    const voteHandler = (id, type) => {
        const token = localStorage.getItem('token')

        if(vote === 0){
            setVote(type)
            sendVote(id, token, type)
        } else {
            setVote(0)
            sendVote(id, token, 0)
        }
    }

    return ( 
        <Card className={classes.root} onClick={() => goToPost(history, postId)}>
            <CardContent>
                <Typography color="secondary" gutterBottom>
                    {username}
                </Typography>
                <Typography>
                    {postTitle}
                </Typography>
                <Typography variant="body2" component="p">
                    {postText}
                </Typography>
            </CardContent>
            <CardActions className={classes.action}>
                <IconWrapper>
                    <IconButton aria-label="voto positivo" onClick={() => voteHandler(postId, 1)}>
                        <AddBoxIcon/>
                    </IconButton>
                    <Typography variant="body2" color="textPrimary" component="p">
                        {votesCount}
                    </Typography>
                    <IconButton aria-label="voto negativo" onClick={() => voteHandler(postId, -1)}>
                        <IndeterminateCheckBoxIcon/>
                    </IconButton>
                </IconWrapper>
            <Typography variant={"button"} className={classes.comment}>{commentsCount} comentários</Typography>
            </CardActions>
        </Card>
     );
}
 
export default PostCard;