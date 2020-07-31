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

// console.log("Bem vindo ao jogo de Blackjack!")
// let play = confirm("Quer iniciar uma nova rodada?")

// //variáveis do usuário
// let playerHand = []
// let playerPoints = []
// let printPlayerHand = ""
// let printPlayerPoints = 0

// //variáveis do computador
// let pcHand = []
// let pcPoints = []
// let printPcHand = ""
// let printPcPoints = 0

// //8 - verifica se ambas as cartas são ases
// let verifyPlayerHand = (playerPoints[0] === 11) && (playerPoints[1] === 11)
// let verifyPcHand = (pcPoints[0] === 11) && (pcPoints[1] === 11)

// if (play) {
//    console.log("Vamos jogar!!!")


//    //RODADA
//    //sorteia 2 cartas para o jogador
//    for (let i=0; i <=2; i++) {
//       let carta = comprarCarta()
//       playerHand.push(carta.texto)
//       playerPoints.push(carta.valor)
//       if (verifyPlayerHand) {
//          i = i
//       } else {
//          i++
//       }
//    }

//    for (let carta of playerHand) {
//       printPlayerHand += (carta + " ")
//    }


//    //sorteia 2 cartas para o computador
//    for (let i=0; i <=2; i++) {
//       let carta = comprarCarta()
//       pcHand.push(carta.texto)
//       pcPoints.push(carta.valor)
//       if (verifyPcHand) {
//          i = i
//       } else {
//          i++
//       }
//    }

//    for (let carta of pcHand) {
//       printPcHand += (carta + " ")
//    }

//    //define a pontuação de cada jogador
//    for (let valor of playerPoints) {
//       printPlayerPoints += valor
//    }

//    for (let valor of pcPoints) {
//       printPcPoints += valor
//    }

//    //9 - Verificar se algum dos jogadores chegou a 21 e pergunta se o jogador quer comprar outra carta, mostra suas duas cartas e esconde a segunda carta do computador
//    if (printPlayerPoints === 21 || printPcPoints === 21) {
//       let winner = "computador"
//       if (printPlayerPoints === 21) {
//          winner = "usuário"
//       }
//       alert(`Suas cartas são ${printPlayerHand}. Sua pontuação é ${printPlayerPoints}`+
//       "\n"+
//       `As cartas do computador são ${printPcHand}. A pontuação do computador é ${printPcPoints}`+
//       `O ${winner} ganhou!`
//       )
//    } else {
//       let buyCard = confirm(`Suas cartas são ${printPlayerHand}. A carta revelada do computador é ${printPcHand[0]+printPcHand[1]}`+ "\n"+ "Deseja comprar mais uma carta?")

//       if (buyCard) {
//          let carta = comprarCarta()
//          playerHand.push(carta.texto)
//          playerPoints.push(carta.valor)
//          printPlayerHand += (carta.texto + " ")
//          printPlayerPoints += carta.valor
//       } else {
//          let winner = "computador"
//          if (printPlayerPoints < printPcPoints) {
//             winner = "usuário"
//          }
//          alert(`Suas cartas são ${printPlayerHand}. Sua pontuação é ${printPlayerPoints}`+
//       "\n" + `As cartas do computador são ${printPcHand}. A pontuação do computador é ${printPcPoints}.`+"\n"+ `O ${winner} ganhou!`)
//       }


//    }

// } else {
//    console.log("O jogo acabou!")
// }
 