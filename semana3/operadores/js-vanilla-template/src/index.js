//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//1. Impressão no console:
/*
a. false
b. false
c. true
e. boolean
*/

//2. Impressão no console:
/*
a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 10
*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//1.
/*
let userName =  Number(prompt("Qual é a sua idade?"));
let userFriend = Number(prompt("Qual é o nome do seu/sua melhor amig@?"))

let result = userName > userFriend

console.log("Sua idade é maior do que a do seu/sua melhor amig@?", result)
console.log(userName-userFriend)
*/

//2.

/*
let guess = Number(prompt("Digite um número par:"))
console.log(guess%2)
*/

//c. Como não há resto na divisão de um número par por 2, ele será sempre zero.
//d. Caso o usuário digite um número ímpar, o resto da divisão será diferente de zero

//3. 

/*
let listaDeTarefas = []

let tarefaUm = prompt("Qual será sua primeira tarefa?")
let tarefaDois = prompt("Qual será sua segunda tarefa?")
let tarefaTres = prompt("Qual será sua terceira tarefa?")
listaDeTarefas.push(tarefaUm, tarefaDois, tarefaTres)
console.log(listaDeTarefas)

let tarefaCompleta = prompt("Digite o número da tarefa que já realizou: 0, 1 ou 2")

listaDeTarefas.splice(tarefaCompleta,1)
console.log(listaDeTarefas)
*/

//4. 
/*
let nomeDoUsuario = prompt("Digite seu nome:")
let emailDoUsuario = prompt("Digite seu e-mail:")

console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vind@, " + nomeDoUsuario + "!")
*/

//DESAFIOS EXTRAS
//1.
/*
let tempOne = 77
let tempTwo = 80
let tempThree = 30

let firstConvert = (tempOne-32)*5/9 + 273.15
console.log(firstConvert + "K")

let secConvert = tempTwo*(9/5) + 32
console.log(secConvert + "°F")

let thirdConvert = tempThree*(9/5) + 32
let fourthConvert = (tempThree-32)*5/9 + 273.15
console.log("30°C são equivalentes a ", thirdConvert, "em °F e", fourthConvert, "em K.")

tempThree = Number(prompt("Digite a temperatura em graus Celsius que deseja convertes para °F e K:"))

thirdConvert = tempThree*(9/5) + 32
fourthConvert = (tempThree-32)*5/9 + 273.15

console.log(String(tempThree), "°C são equivalentes a ", thirdConvert, "em °F e", fourthConvert, "em K.")
*/

//2.

/*
const reaisPorKw = 0.05
let consumption = 280

let total = reaisPorKw*consumption

console.log("O valor a ser pago por uma residência que consumiu 280 quilowatts-hora é: R$", total)

let discount = 0.85
total = total*discount

console.log("O valor a ser pago após o desconto é de: R$", total)
*/

//3.
/*
let lb = 20
let lbToKg = lb/2.205
console.log("20lb equivalem a", lbToKg + "kg")

let oz = 10.5
let ozToKg = oz/35.274
console.log("10.5lb equivalem a", ozToKg + "kg")

let mi = 100
let miToM = mi*1609
console.log("100mi equivalem a", miToM + "m")

let ft = 50
let ftToM = ft/3.281
console.log("50mi equivalem a", ftToM + "m")

let gal = 103.56
let galToL = gal*3.785
console.log("103.56 galões americados equivalem a", galToL + "l")


let xic = 450
let xicToL = xic/3.52
console.log("450 xícaras imperiais equivalem a", xicToL + "l")

xic = Number(prompt("digite a quantidade de xícaras que deseja converter para litros:"))
xicToL = xic/3.52
console.log(String(xic), " xícaras imperiais equivalem a", xicToL + "l")
*/
