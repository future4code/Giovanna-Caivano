import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Container, makeStyles, Typography } from '@material-ui/core';
import useProtectedPage from '../../hooks/useProtectedPage';
import PostCard from '../../components/PostCard/PostCard';
import Loading from '../../components/Loading/Loading';
import { timePassed } from '../../helpers/timePassed'
import { baseURL } from '../../constants/urls';
import FeedForm from './FeedForm';

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
    const classes = useStyles();
    
    useProtectedPage();
    useEffect(() => {
        getAllPosts()
    }, [])

    const getAllPosts = () => {
        axios.get(`${baseURL}/posts`, {
            headers: {
              Authorization: localStorage.getItem('token')
            }
          })
            .then((response) => {
              setPostArray(response.data.posts)
            })
            .catch((error) => {
              console.log(error)
              alert('Ocorreu um erro, tente novamente')
            })
    }
    
    const renderPosts = () => {
        return (
            postArray.sort((a, b) => {return b.createdAt - a.createdAt}).map((post) => {
                return (
                    <PostCard 
                        key={post.id} 
                        username={post.username} 
                        postTitle={post.title} 
                        postText={post.text} 
                        votesCount={post.votesCount} 
                        commentsCount={post.commentsCount} 
                        postId={post.id}
                        createdAt={timePassed(post.createdAt)}
                    />
                )
            })
        )
    }

    return ( 
        <Container className={classes.root} maxWidth="md">
            <Typography variant={'h5'} align={"center"}>Crie seu post</Typography>
            <Container className={classes.subcontainer}>
                <FeedForm getPosts={getAllPosts}/>
            </Container>
            {postArray.length > 0 ? renderPosts() : <Loading/>}
        </Container>
     );
}
 
export default FeedPage;