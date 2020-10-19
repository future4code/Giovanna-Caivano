const operation = process.argv[2]
const number1 = Number(process.argv[3])
const number2 = Number(process.argv[4])

const doTheMath = (operation, number1, number2) => {
    if(operation && number1 && number2){
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
    } else {
        return "Você deve digitar o nome da operação e os dois números"
    }
}

console.log("\x1b[33m%s\x1b[0m", doTheMath(operation, number1, number2))