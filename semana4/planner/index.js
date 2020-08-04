
function createTodo() {
    const myTodo = document.getElementById("tarefa").value
    const whenTodo = document.getElementById("dias-semana").value
    const timeTodo = document.getElementById("hour-todo").value
    
    if (myTodo !== "") {
        document.getElementById(whenTodo).innerHTML += `<li onclick='deleteTodo(this)'>${timeTodo} - ${myTodo}</li>`
        document.getElementById("tarefa").value = ""
    } else {
        alert("Por favor, digite uma tarefa!")
    }
}

function deleteTodo(element) {
    element.className = "done"
}

function cleanPlanner() {
    const daysOfTheWeek = document.getElementsByTagName("ul")
    for (i=0; i<daysOfTheWeek.length; i++) {
        daysOfTheWeek[i].innerHTML = ""
    }
}