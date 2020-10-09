import axios from 'axios'
import {baseURL} from '../constants/urls'

const token = localStorage.getItem('token')

export const createPost = (body, setIsLoading, getAllPosts) => {
    setIsLoading(true)
    axios.post(`${baseURL}/posts`, body, {
        headers: {
            Authorization: token
        }
    })
    .then((response) => {
        setIsLoading(false)
        alert('Post criado com sucesso')
        getAllPosts()

    })
    .catch((error) => {
        console.log(error)
        setIsLoading(false)
        alert('Algo deu errado. Por favor, tente novamente.')
    })
}

export const createComment = (id, body, setIsLoading, getPostDetail, setPostDetail, setPostComments) => {
    setIsLoading(true)
    axios.post(`${baseURL}/posts/${id}/comment`, body, {
        headers: {
            Authorization: token
        }
    })
    .then((response) => {
        setIsLoading(false)
        alert('Comentário criado com sucesso')
        getPostDetail(id, setPostDetail, setPostComments)
    })
    .catch((error) => {
        console.log(error)
    })
}

 export const getPostDetail = (id, setPostDetail, setPostComments) => {
    axios.get(`${baseURL}/posts/${id}`, {
        headers: {
            Authorization: token
        }
    })
    .then((response) => {
        setPostDetail(response.data.post)
        setPostComments(response.data.post.comments)
    })
    .catch((error) => {
        console.log(error)
    })
}
