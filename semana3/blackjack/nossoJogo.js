/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 console.log("Bem vindo ao jogo de Blackjack!")
 let play = confirm("Quer iniciar uma nova rodada?")

if (play) {
   console.log("Vamos jogar!!!")
} else {
   console.log("O jogo acabou!")
}

//RODADA
//variáveis do usuário
let playerHand = []
let playerPoints = []
let printPlayerHand = ""
let printPlayerPoints = 0

//variáveis do computador
let pcHand = []
let pcPoints = []
let printPcHand = ""
let printPcPoints = 0

//sorteia 2 cartas para o jogador
for (let i=0; i <=2; i++) {
   let carta = comprarCarta()
   playerHand.push(carta.texto)
   playerPoints.push(carta.valor)
   i++
}

for (let carta of playerHand) {
   printPlayerHand += (carta + " ")
}


//sorteia 2 cartas para o computador
for (let i=0; i <=2; i++) {
   let carta = comprarCarta()
   pcHand.push(carta.texto)
   pcPoints.push(carta.valor)
   i++
}

for (let carta of pcHand) {
   printPcHand += (carta + " ")
}


//define a pontuação de cada jogador
for (let valor of playerPoints) {
   printPlayerPoints += valor
}

for (let valor of pcPoints) {
   printPcPoints += valor
}

//mostra cartas e pontuação
console.log(`Usuário - cartas: ${printPlayerHand} - pontuação ${printPlayerPoints}`)
console.log(`Computador - cartas: ${printPcHand} - pontuação ${printPcPoints}`)

//informa o vencedor ou empate
if (printPlayerPoints === printPcPoints) {
   console.log("Empate!")
} else if (printPlayerPoints > printPcPoints) {
   console.log("O usuário ganhou!")
} else {
   console.log("O computador ganhou!")
}