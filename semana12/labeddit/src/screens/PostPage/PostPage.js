import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardActionArea, Container, makeStyles } from '@material-ui/core';
import useProtectedPage from '../../hooks/useProtectedPage';
import { getPostDetail, sendCommentVote } from '../../services/posts'
import PostCard from '../../components/PostCard/PostCard';
import CommentBox from '../../components/CommentBox'


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
    }
}))

const PostPage = () => {
    const classes = useStyles();
    const pathParams = useParams();
    const [postDetail, setPostDetail] = useState({})
    const [postComments, setPostComments] = useState([])
    const [vote, setVote] = useState(0)

    useProtectedPage()
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        getPostDetail(pathParams.id, token, setPostDetail, setPostComments)
    }, [pathParams.id])

    const voteHandler = (commentId, type) => {
        const token = localStorage.getItem('token')

        if(vote === 0){
            setVote(type)
            sendCommentVote(pathParams.id, commentId, token, type)
        } else {
            setVote(0)
            sendCommentVote(pathParams.id, commentId, token, 0)
        }
    }
    
    return ( 
        <Container className={classes.root}>
            <CardActionArea>
                <PostCard
                    key={postDetail.id} 
                    username={postDetail.username} 
                    postTitle={postDetail.title} 
                    postText={postDetail.text} 
                    votesCount={postDetail.votesCount} 
                    commentsCount={postDetail.commentsCount} 
                    postId={postDetail.id}
                />
                    {postComments.map((comment) => {
                        return (
                            <CommentBox
                                key={comment.id}
                                id={comment.id}
                                username={comment.username}
                                votesCount={comment.votesCount}
                                votesHandler={comment.votesHandler}
                            />
                        )})}
            </CardActionArea>
        </Container>
     );
}
 
export default PostPage;