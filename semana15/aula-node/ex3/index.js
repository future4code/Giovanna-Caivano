const fs = require('fs')

const todo = process.argv[2]

fs.appendFile('./todolist.txt', `${todo}, `, error => {
    if(error) throw error

    console.log("\x1b[44m%s\x1b[0m", "Tarefa adicionada com sucesso!")

    fs.readFile('./todolist.txt', 'utf-8', (error, data) => {
        if(error) throw error
        console.log(data)
        })
})
