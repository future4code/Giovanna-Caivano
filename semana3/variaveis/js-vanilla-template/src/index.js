/*
EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO:
1. Será impresso no console:
10
5 10

2. Será impresso no console:
10 10 10
*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//1

let userName
let userAge

console.log(typeof(userName), typeof(userAge)) 

/*
1.d) Por que este tipo foi impresso: porque nós não definimos as variáveis no código acima, portanto, estão "undefined". 
*/

userName = prompt("Qual é o seu nome?")
userAge = prompt("Qual é a sua idade?")

console.log(typeof(userName), typeof(userAge))

//Ambas as variáveis são strings, que é o retorno padrão do prompt.

console.log("Olá,", userName, "você tem", userAge, "anos.")

//2

let userAddress = prompt("Digite seu endereço:")
let userFavColor = prompt("Qual é sua cor favorita?")
let userPetName = prompt("Qual é o nome do seu pet?")
let userFavMovie = prompt("Qual é seu filme favorito?")
let userFavFood = prompt("Qual é sua comida favorita?")

console.log("1. Digite seu endereço:")
console.log("Resposta:", userAddress)
console.log("2. Qual é sua cor favorita?")
console.log("Resposta:", userFavColor)
console.log("3. Qual é o nome do seu pet?")
console.log("Resposta:", userPetName)
console.log("4. Qual é seu filme favorito?")
console.log("Resposta:", userFavMovie)
console.log("5. Qual é sua comida favorita?")
console.log("Resposta:", userFavFood)

//3

let favFoods = ["arroz", "chocolate", "alface", "berinjela", "pão"]
console.log(favFoods)

console.log("Essas são minhas comidas preferidas:")
console.log(favFoods[0])
console.log(favFoods[1])
console.log(favFoods[2])
console.log(favFoods[3])
console.log(favFoods[4])

favFoods[1] = prompt("Qual é a sua comida preferida?")

console.log(favFoods)

//4


let questionOne = "Você gosta de Arroz?"
let questionTwo = "Você assiste Netflix?"
let questionThree = "Você mora fora do Brasil?"

let questions = [questionOne, questionTwo, questionThree]

let answerOne = true
let answerTwo = true
let answerThree = false

let answers = [answerOne, answerTwo, answerThree]

console.log(questionOne, answerOne)
console.log(questionTwo, answerTwo)
console.log(questionThree, answerThree)



