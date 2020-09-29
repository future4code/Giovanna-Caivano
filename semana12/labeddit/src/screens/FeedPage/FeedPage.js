import React, { useEffect, useState } from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import PostCard from '../../components/PostCard/PostCard';
import FeedForm from './FeedForm';
import useProtectedPage from '../../hooks/useProtectedPage';
import { getPosts } from '../../services/posts';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
    },
    subcontainer: {
        marginBottom: theme.spacing(3)
    }
}))
const FeedPage = () => {
    const [postArray, setPostArray] = useState([])
    
    useProtectedPage()
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        getPosts(token, setPostArray)
    }, [])

    const classes = useStyles();

    return ( 
        <Container className={classes.root} maxWidth="xs">
            <Typography variant={'h5'} align={"center"}>
                Crie seu post
            </Typography>
            <Container className={classes.subcontainer}>
                <FeedForm/>
            </Container>
            {postArray.map((post) => {
                return (
                    <PostCard 
                        key={post.id} 
                        username={post.username} 
                        postTitle={post.title} 
                        postText={post.text} 
                        votesCount={post.votesCount} 
                        commentsCount={post.commentsCount} 
                        postId={post.id}
                    />
                )
            })}
        </Container>
     );
}
 
export default FeedPage;