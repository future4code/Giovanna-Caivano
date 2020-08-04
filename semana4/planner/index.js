
function createTodo() {
    const myTodo = document.getElementById("tarefa").value
    const whenTodo = document.getElementById("dias-semana").value
    
    if (myTodo !== "") {
        document.getElementById(whenTodo).innerHTML += `<p onclick='deleteTodo()'>${myTodo}</p>`
        document.getElementById("tarefa").value = ""
    } else {
        alert("Por favor, digite uma tarefa!")
    }
}

function deleteTodo() {
    const todo = document.querySelectorAll("p").innerHTML
    console.log(todo)
}