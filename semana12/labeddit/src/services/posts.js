import axios from 'axios'
import {baseURL} from '../constants/urls'

export const getPosts = (token, setPostArray) => {
    axios.get(`${baseURL}/posts`, {
        headers: {
            Authorization: token
        }
    })
    .then((response) => {
        console.log(response.data.posts)
        setPostArray(response.data.posts)
    })
    .catch((error) => {
        console.log(error)
    })
}

export const createPost = (token, body) => {
    axios.post(`${baseURL}/posts`, body, {
        headers: {
            Authorization: token
        }
    })
    .then((response) => {
        console.log(response.status)
    })
    .catch((error) => {
        console.log(error)
    })
}

export const sendVote = (id, token, direction) => {
    const body = {
        direction: direction
    }
    axios.put(`${baseURL}/posts/${id}/vote`, body, {
        headers: {
            Authorization: token
        }
    })
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
}
 export const getPostDetail = (id, token, setPostDetail, setPostComments) => {
    axios.get(`${baseURL}/posts/${id}`, {
        headers: {
            Authorization: token
        }
    })
    .then((response) => {
        console.log(response.data.post)
        setPostDetail(response.data.post)
        setPostComments(response.data.post.comments)
    })
    .catch((error) => {
        console.log(error)
    })
}

export const sendCommentVote = (id, commentId, token, direction) => {
    const body = {
        direction: direction
    }
    axios.put(`${baseURL}/posts/${id}/comment/${commentId}/vote`, body, {
        headers: {
            Authorization: token
        }
    })
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
}