//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//1.a. Impressão no console:
//10
//50

//1.b. Nada apareceria no console. A função console.log serve exatamente para imprimir informações no console, se a retirarmos, o resultado das funções deixa de ser impresso, embora continue sendo executado.

//2.a. Impressão no console:
//Darvas
//Goli

//2.b. Impressão no console após alteração dos valores do array: 
//Amanda
//Caio

//3. A função gera o quadrado dos números pares de um array. Um melhor nome para ela seria: calculaQuadrado 

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//4.a.

// function aboutMe () {
//     console.log("Eu sou Giovanna, tenho 27 anos, moro em São Paulo e sou desenvolvedora.")
// }

// console.log(aboutMe())

//4.b.

// function about (name, age, city, isStudent) {
//     if (isStudent) {
//         isStudent = "sou"
//     } else {
//         isStudent = "não sou"
//     }
//     console.log("Eu sou", name, "tenho", age, "anos, moro em", city, "e", isStudent, "estudante.")
// }

// console.log(about("Giovanna", 27, "São Paulo", false))

//5.a.

// function sumNumber (numberOne, numberTwo) {
//     const sum = numberOne + numberTwo
//     return sum
// }
// let result = sumNumber(10, 20)
// console.log(result)

//5.b.

// const verifyNumbers = (numberOne, numberTwo) => {
//     if (numberOne >= numberTwo) {
//         return true
//     } else {
//         return false
//     }
// }
// let verification = verifyNumbers(20, 10)
// console.log(verification)

//5.c.

// const printMsg = (msg) => {
//     for (i=0; i<10; i++) {
//         console.log(msg)
//     }
// }
// let print = printMsg("Imprima esta msg")
// console.log(print)

//6.
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//a.
// const countElements = (array) => {
//     return array.length
// }
// let numberOfElements = countElements(array)
// console.log(numberOfElements)

//b. 
// const checkEven = (guess) => {
//     if (guess%2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }

//c. 
// const extractEven = (array) => {
//     const newArray = []
//     for (i=0; i < array.length; i++) {
//         if (array[i]%2 === 0) {
//             newArray.push(array[i])
//         } 
//     }
//     return newArray.length
// }
// let countEven = extractEven(array)
// console.log(countEven)

//d.
// const extractEven = (array) => {
//     const newArray = []
//     for (i=0; i < array.length; i++) {
        
//         if (checkEven(array[i])) {
//             newArray.push(array[i])
//         } 
//     }
//     return newArray.length
// }

//DESAFIOS

//1.1. Arrow function que recebe um parâmetro e o imprime no console
// const printMsg = (msg) => {
//     console.log(msg)
// }
// let printThis = printMsg("Imprime mensagem no console.")

//1.2. 
// const sum = (numberOne, numberTwo) => {
//     let sum = numberOne + numberTwo
//     printMsg(sum)
// }
// let printResult = sum(2,2)

//2.
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
//a.
// const extractEven = (array) => {
//     const newArray = []
//     for (i=0; i < array.length; i++) {
//         if (array[i]%2 === 0) {
//             newArray.push(array[i]*2)
//         } 
//     }
//     return newArray
// }
// let multiplyEven = extractEven(numeros)
// console.log(multiplyEven)

//b.
// const extractMax = (array) => {
//     let maxNumber = 0
//     for (i=0; i<array.length; i++) {
//         if (array[i] > maxNumber) {
//             maxNumber = array[i]
//         }
//     }
//     return maxNumber
// }
// let checkMaxNumber = extractMax(numeros)
// console.log(checkMaxNumber)

//c.
// const extractIndex = (array) => {
//     let maxNumber = 0
//     let maxIndex = 0
//     for (i=0; i<array.length; i++) {
//         if (array[i] > maxNumber) {
//             maxNumber = array[i]
//             maxIndex = i
//         }
//     }
//     return maxIndex
// }
// let checkIndex = extractIndex(numeros)
// console.log(checkIndex)

//d.
// const invertArray = (array) => {
//     let iArray = []
//     for(i=array.length-1; i>=0; i--) {
//         iArray.push(array[i])
//     }
//     return iArray
// }
// let resultArray = invertArray(numeros)
// console.log(resultArray)