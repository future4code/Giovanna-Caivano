console.log("Bem vindo ao jogo de Blackjack!")
let play = confirm("Quer iniciar uma nova rodada?")

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

if (play) {
   console.log("Vamos jogar!!!")

      //RODADA
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
} else {
   console.log("O jogo acabou!")
   
}

