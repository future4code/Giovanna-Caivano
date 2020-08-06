const postArray = []
const postPage = document.getElementById("box-de-posts")

function postSubmit() {
    
    const titulo = document.getElementById("titulo-post")
    const autor = document.getElementById("autor-post")
    const conteudo = document.getElementById("conteudo-post")
    const img = document.getElementById("img-post")
    
    const blogPost = {
        titulo: titulo.value,
        autor: autor.value,
        conteudo: conteudo.value,
        img: img.value
    }
    
    postArray.push(blogPost)
    
    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
    img.value = ""
    
    uploadPost(blogPost,postPage)
}

function uploadPost(blogPost, postPage) {
    postPage.innerHTML += `<div> <p>${blogPost.titulo} de ${blogPost.autor}</p><p>${blogPost.conteudo}</p><img src=${blogPost.img}></div>`
}