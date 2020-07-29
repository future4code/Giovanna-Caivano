//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//1. O código pede o input de número ao usuário, transforma o input em número e verifica se o número inserido pelo usuário é par ou ímpar. Caso o número seja par, ele apresenta a msg "Passou no teste", caso seja ímpar, apresenta a msg "Não passou no teste".

//2. a. O código serve para imprimir o preço da fruta informada pelo usuário.
//b. Para a fruta Maçã a msg impressa será: O preço da fruta Maçã é R$ 2.25
//c. Caso não houvesse o break do item c, o switch continuaria rodando e a msg impressa seria:
// O preço da fruta Pêra é R$ 5

//3. a. A primeira linha está pedindo um input de número ao usuário e transformando-o de string para número.
//b e c. Caso o usuário digite 10, a condição será verdadeira e apresentará a mensagem "Esse número passou no teste". Caso o número digitado seja -10, a condição será falsa e o bloco do if deixará de rodar e passará para a última linha do código. Ao ler essa linha o programa apresentará um erro pois a variável mensagem foi declarada dentro do bloco do if e, portanto, é "invisível" para o escopo global.

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//4.
// let userAge = Number(prompt("Qual é sua idade?"))

// if (userAge >= 18) {
//     console.log("Você pode dirigir!")
// } else {
//     console.log("Você não pode dirigir!")
// }

//5. Utilizando if/else

// let userTime = prompt("Digite o período em que estuda: M (matutino), V (vespertino) N (noturno)").toUpperCase()

// if (userTime === "M") {
//     console.log("Bom dia!")
// } else if (userTime === "V") {
//     console.log("Boa tarde!")
// } else if (userTime === "N") {
//     console.log("Boa noite!")
// } else {
//     console.log("Este não é um período válido!")
// }

//6. Utilizando switch case

// let userTime = prompt("Digite o período em que estuda: M (matutino), V (vespertino) N (noturno)").toUpperCase()

// switch (userTime) {
//     case "M":
//         console.log("Bom dia!")
//         break
//     case "V":
//         console.log("Boa tarde!")
//         break
//     case "N":
//         console.log("Boa noite!")
//         break
//     default:
//         console.log("Este não é um período válido!")
// }

//7.

// let userMovieGenre = prompt("Qual é o gênero do filme que vamos assistir? Escolha entre: Terror, Comédia, Romance, Suspense, Drama ou Fantasia").toLowerCase()
// let ticketPrice = Number(prompt("Qual é o preço do ingresso?"))

// if (userMovieGenre === "fantasia" && ticketPrice < 15) {
//     console.log("Bom filme! =]")
// } else {
//     console.log("Escolha outro filme :(")
// }

// DESAFIOS
// 1.

// let userMovieGenre = prompt("Qual é o gênero do filme que vamos assistir? Escolha entre: Terror, Comédia, Romance, Suspense, Drama ou Fantasia").toLowerCase()
// let ticketPrice = Number(prompt("Qual é o preço do ingresso?"))
// let snacks = prompt("Qual snack vai comprar? Pipoca, chocolate, refrigerante, amendoim...")

// if (userMovieGenre === "fantasia" && ticketPrice < 15) {
//     console.log("Bom filme! =]")
//     console.log("... com", snacks)
// } else {
//     console.log("Escolha outro filme :(")
// }

//2.

let userName = prompt("Digite seu nome completo:")

//tipo de jogo
let gameType = prompt("Digite o tipo de jogo que deseja assistir: IN - Internacional; DO - Doméstico").toUpperCase()

//etapa do jogo
let gameRound = prompt("Indique a etapa do jogo que deseja assistir: SF - semi-final; DT - decisão de 3º lugar; FI - final").toUpperCase()

//categoria
let gameCategory = Number(prompt("Qual categoria? 1, 2, 3 ou 4"))

let ticketQnty = Number(prompt("Quantos ingressos deseja comprar?"))

let ticketPrice

if (gameRound === "SF") {
    switch (gameCategory) {
        case 1:
            ticketPrice = 1320
            break
        case 2:
            ticketPrice = 880
            break
        case 3:
            ticketPrice = 550
            break
        case 4:
            ticketPrice = 220
            break
        default:
            console.log("Informações incorretas")
            break
    }
} else if (gameRound === "DT") {
    switch (gameCategory) {
        case 1:
            ticketPrice = 660
            break
        case 2:
            ticketPrice = 440
            break
        case 3:
            ticketPrice = 330
            break
        case 4:
            ticketPrice = 170
            break
        default:
            console.log("Informações incorretas")
            break
    }
} else if (gameRound === "FI") {
    switch (gameCategory) {
        case 1:
            ticketPrice = 1980
            break
        case 2:
            ticketPrice = 1320
            break
        case 3:
            ticketPrice = 880
            break
        case 4:
            ticketPrice = 330
            break
        default:
            console.log("Informações incorretas")
            break
    }
}

console.log("---Dados da sua compra---")
console.log("Nome do cliente:", userName)
console.log("Tipo de jogo:", gameType)
console.log("Etapa do jogo:", gameRound)
console.log("Categoria:", gameCategory)
console.log("Quantidade de Ingressos:", ticketQnty)
console.log("---Valores---")

if (gameType === "IN") {
    ticketPrice = ticketPrice*4.1
    totalPrice = ticketPrice*ticketQnty
    console.log("Valor do ingresso: US$" + ticketPrice)
    console.log("Valor total: US$" + totalPrice)
} else if (gameType === "DO") {
    totalPrice = ticketPrice*ticketQnty
    console.log("Valor do ingresso: R$" + ticketPrice)
    console.log("Valor total: R$" + totalPrice)
} else {
    console.log("Algo deu errado!")
}



