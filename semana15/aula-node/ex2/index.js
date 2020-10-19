const operation = process.argv[2]
const number1 = Number(process.argv[3])
const number2 = Number(process.argv[4])

const doTheMath = (operation, number1, number2) => {
    switch(operation) {
        case 'add':
            return `Resposta: ${number1+number2}`
        case 'sub':
            return `Resposta: ${number1-number2}`
        case 'mult':
            return `Resposta: ${number1*number2}`
        case 'div':
            return `Resposta: ${number1/number2}`
        default:
            return "Por favor, digite uma das 4 operações: add, sub, mult ou div"
    }
}

console.log(doTheMath(operation, number1, number2))