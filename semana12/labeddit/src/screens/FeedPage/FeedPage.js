import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import PostCard from '../../components/PostCard/PostCard';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
    }
}))
const FeedPage = () => {
    const classes = useStyles();

    return ( 
        <Container className={classes.root} maxWidth="xs">
            <PostCard/>
            <PostCard/>
        </Container>
     );
}
 
export default FeedPage;