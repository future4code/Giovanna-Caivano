//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//1. O código está criando a variável valor e incrementando-a com o valor do contador (i) até que seu valor seja igual a 10. Ou seja, quando o valor do contador é igual a 1, somará 1, quando for 2, somará 2, e assim por diante. Ao final, o valor impresso no console é 10.
//2. 
//a. Serão impressos no console os numeros do array que não maiores do que 18. Portanto: 19, 21, 23, 25, 27, 30 (um embaixo do outro).
//b. O for ... of não é suficiente para acessar o índice. A sua estrutura é usada para percorrer os valores dentro de um array. Para cada iteração ele atribuirá um valor do array à variável criada dentro dele. Neste caso a estrutura indicada é o for, para criar um contador.

//DESAFIO 1

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//3.
//a.
// let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for (let i=0; i < array.length; i++) {
//   console.log(array[i])
//   }

//b.
// let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for (let i=0; i < array.length; i++) {
//   console.log(array[i]/10)
//   }

//c.
// let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let array2 = []

// for (let i=0; i < array.length; i++) {
//   if ((array[i])%2 === 0) {
//     array2.push(array[i])
//   }
//   }
  
//   console.log(array2)

//d.
// let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let array2 = []

// for (let i=0; i < array.length; i++) {
//   if ((array[i])%2 === 0) {
//     array2.push(`O elemento do índex ${i} é ${array[i]}`)
//   }
//   }
  
//   console.log(array2)

//e.
// let array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let min = 50
// let max = 50

// for (let num of array) {
//   if (num < min) {
//     min = num
//   } else if (num > max) {
//     max = num
//     }
//   }
  
//   console.log(`O maior número é ${max} e o menor número é ${min}`)

//DESAFIO 2

// console.log ("Vamos jogar!")
// let secretNumber = Number(prompt("Jogador 1. Escolha um número de 1 a 10:"))

// let guess = " "
// console.log(guess)

// while (guess !== secretNumber) {
//   guess = Number(prompt("Jogador 2, tente adivinhar o número secreto do Jogador 1. Escolha um número de 1 a 10:"))
//   console.log(`Seu palpite é ${guess}`)
  
//   if (guess < secretNumber) {
//     console.log("Porém, você errou! Seu número é menor que o número secreto.")
//     } else if (guess > secretNumber) {
//         console.log("Porém, você errou! Seu número é maior que o número secreto.")
//     } else {
//         console.log("Acertô mizeravi!!!")
//     }
// }

//DESAFIO 3

// console.log ("Vamos jogar!")
// let secretNumber = Math.floor(Math.random() * 10 + 1)

// let guess = " "
// console.log(guess)

// while (guess !== secretNumber) {
//   guess = Number(prompt("Jogador, tente adivinhar o número secreto do Jogador 1. Escolha um número de 1 a 10:"))
//   console.log(`Seu palpite é ${guess}`)
  
//   if (guess < secretNumber) {
//     console.log("Porém, você errou! Seu número é menor que o número secreto.")
//     } else if (guess > secretNumber) {
//         console.log("Porém, você errou! Seu número é maior que o número secreto.")
//     } else {
//         console.log("Acertô mizeravi!!!")
//     }
// }

// Não foi difícil fazer a alteração, apenas troquei a atribuição da variável do número secreto. Ao invés do prompt para solicitar o input do usuário, utilizei o math.random para escolher um número aleatório, entre 1 e 10, arrendondando-o. Não sei como poderia ser mais simples... :thinking_face:
