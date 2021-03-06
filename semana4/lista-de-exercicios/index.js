//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/* EXERCÍCIO 1
O que faz: o código por completo converte o valor de 100 dólares em reais com valor de cotação fornecido pelo usuário e imprime o resultado no console do navegador.
Como faz: 
- A função conversorDeMoeda recebe input do usuário com a cotação do dólar que deseja converter para reais e retorna o valor do input multiplicado pelo valor recebido como parâmetro da função. 
- A função retorna uma string com "R$" concatenado ao valor resultante da multiplicação.
- A variável meuDinheiro chama a função conversorDeMoeda passando o valor 100. Dessa forma o retorno da função é "R$"+(100*cotação)
- O retorno da função é impresso no console, conforme abaixo.
Valor impresso no console: R$(100*cotacao). Caso o input da cotação fosse 5, o valor impresso no console seria: R$500
*/

/* EXERCÍCIO 2
O que faz: o código por completo calcula o valor do retorno do investimento de acordo com o tipo de investimento feito e imprime no console os valores resultantes de acordo com os valores passados como parâmetros da função chamada.
Como faz: 
- A função investeDinheiro recebe dois parâmetros referentes, respectivamente, ao tipo de investimento feito e o valor investido. Ela declara a variável que será o retorno da função ao final do seu escopo - essa variável conrresponde ao valor resultante do investimento com retorno. Com as iterações switch case, a função avalia o primeiro parâmetro, caso ele corresponda a algum dos investimentos listados, o cálculo do valor após o investimento é feito e atribuído à variável valorAposInvestimento. A variável é retornada pela função.
- A constante novoMontante é declarada. Ela chama a função investeDinheiro passando os dois parâmetros, ambos válidos. A função chamada calcula o valor e retorna a variável valorAposInvestimento que, neste caso, é igual a 165.
- A constante segundoMontante é declarada. Ela chama a função investeDinheiro passando os dois parâmetros, um deles, inválido (não correspondente às opções do switch case). A função chamada retorna o valor default do switch case: "TIPO DE INVESTIMENTO INFORMADO INCORRETO".
- As duas contanstes acima são impressas no console, individualmente, conforme abaixo. 
Valor impresso no console: 
165
TIPO DE INVESTIMENTO INFORMADO INCORRETO
*/

/* EXERCÍCIO 3
O que faz: o código por completo separa um array de números em outros dois arrays: um de números pares e outro de números ímpares. Ao final, imprime 3 valores no console: string com a quantidade total de números e dois números, a quantidade de elementos do array de números pares e a quantidade de elementos do array de números ímpares.
Como faz: 
- Declaração do array de números, com 14 elementos, todos do tipo número
- Declaração de dois arrays vazios: array1 e array2
- Verificação, por meio de um laço for ... of, dos números do array de números. Os números pares (com divisão por 2 igual a 0), são empurrados para o primeiro array (array1) por meio da função .push. Os números com divisão por 2 diferente de zero são empurrados para o segundo array (array2), da mesma forma.
- 3 impressões no console, conforme abaixo.
Valor impresso no console:
Quantidade total de números 14
6
8
*/

/* EXERCÍCIO 4
O que faz: o código por completo cria um array de números e duas variáveis, verifica quais são o menor e o maior número do array, atribuindo esses valores às duas variáveis e as imprime no console.
Como faz:
- Declaração do array de números, com 25 números, todos do tipo número.
- Declaração de duas variáveis: numero1 e numero2
- Verificação, por meio de um laço for ... of, dos números do array de números. A cada iteração, são feitas duas validações por meio de condicionais. A primeira verifica se o elemento do array é menor que o valor da variável numero1 e, se positivo, atribui o valor do elemento a ela. A segunda, verifica se o elemento do array é maior que o valor da variável numero2, se positivo, atribui o valor do elemento a ela. Caso as verificações sejam negativas (falsas), o valor das variáveis é mantido.
- Os valores finais das variáveis numero1 e numero2 são impressos no console, individualmente.
Valor impresso no console:
-10
1590
*/

//EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO
/* EXERCÍCIO 1
Pode-se iterar uma lista por meio de loops.
O for...of, for e while.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (number of array) {
    console.log(number)
}

for (i=0; i<array.length; i++) {
    console.log(array[i])
}

let i = 0
while (i<array.length){
    console.log(array[i])
    i++
}
*/

/* EXERCÍCIO 2
Valores das lógicas:
a) false
b) true
c) true
d) true
e) true
*/

/* EXERCÍCIO 3
O código não funciona e gerará um loop infinito pois a condição do laço de repetição while nunca será verdadeira, pois não há incremento da variável i.
Código corrigido:
const quantidadeDeNumerosPares = 5
let i = 0
while(i <= quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
}
*/

/* EXERCÍCIO 4
function verificaTriangulo(a,b,c) {
    let tipoDoTriangulo = "Escaleno"
    if (a === b && b === c) {
        return tipoDoTriangulo = "Equilátero"
    } else if (a === b || a === c || b === c) {
        return tipoDoTriangulo = "Isóceles"
    } else {
        return tipoDoTriangulo
    }
}
console.log(verificaTriangulo(10,9,5))
*/

/* EXERCÍCIO 5
function comparaDoisNúmeros(a,b) {
    if (a > b) {
        console.log("O maior é",a)
    } else {
        console.log("O maior é",b)
    }
    
    if (a%b === 0) {
        console.log(`${a} é divisível por ${b}`)
        console.log(`${b} não é divisível por ${a}`)
    } else if (b%a === 0) {
        console.log(`${b} é divisível por ${a}`)
        console.log(`${a} não é divisível por ${b}`)
    } else {
        console.log(`${a} não é divisível por ${b} e vice-versa`)
    }

    let diferenca = a-b

    if(diferenca <0) {
        diferenca = diferenca*(-1)
    }
    console.log(`A diferença entre eles é ${diferenca}`)
}
comparaDoisNúmeros(15,30)
*/

//EXERCÍCIOS DE FUNÇÕES
/* EXERCÍCIO 1
const arrayDeNumeros = [10, 20, 30, 40, 50, 60]
imprimeSegundoMaiorMenor(arrayDeNumeros)

function imprimeSegundoMaiorMenor(array) {
    let min = Infinity
    let max = 0
    
    encontraExtremos(array, min, max)
    extraiExtremos(array, min, max)

    for (numero of array) {
        if (numero < min) {
            min = numero
        }
        if (numero > max) {
            max = numero
        }
    }

    console.log(min,max)
}

function encontraExtremos(array,min, max) {
    for (numero of array) {
        if (numero < min) {
            min = numero
        }
        if (numero > max) {
            max = numero
        }
    }
    
    extraiExtremos(array, min, max)
}

function extraiExtremos(array, min, max){
    for (i=0; i<array.length;i++) {
        if (array[i] === min) {
            array.splice(i, 1)
        }
        if (array[i] === max) {
            array.splice(i, 1)
        }
    }
    return array
}
*/

/* EXERCÍCIO 2
const mostraMsg = function(msg) {
    alert(msg)
}
const hello = mostraMsg("Hello Future4")
*/

//EXERCÍCIOS DE OBJETOS
/* EXERCÍCIO 1
No JavaScript, arrays e objetos são variáveis de tipo não primitivo.
Arrays são variáveis que contém "listas" de elementos, não ordenados.
Objetos são variáveis que contém diversos valores, assim como o array, porém, são valores nomeados - que são suas propriedades ou métodos (funções próprias daquele objeto).
*/

/* EXERCÍCIO 2
function criaRetangulo(lado1, lado2) {
    const retangulo = {
        lado1: lado1,
        lado2: lado2,
        perimetro: 2*(lado1+lado2),
        area: lado1*lado2
    }

    return retangulo
}
console.log(criaRetangulo(2,3))
*/

/* EXERCÍCIO 3
// const filmeFavorito = {
//     titulo: "John Wick",
//     ano: 2014,
//     diretor: "Chad Stahelski",
//     elenco: ["Keanu Reaves, Ian McShane, Lance Reddick"]
// }
// console.log(`Venha assistir ao filme ${filmeFavorito.nome}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.elenco}.`)
*/

/* EXERCÍCIO 4
const pessoaQualquer = {
    nome: "Maria Carolina",
    idade: 40,
    email: "mariacarolina@gmail.com",
    endereço: "Rua 5, 200 - Pinheiros, SP"
}
function anonimizarPessoa(objeto) {
    const novaPessoa = {
        ...objeto,
        nome: "ANÔNIMO"
    }
    return novaPessoa
}
console.log(anonimizarPessoa(pessoaQualquer))
*/

//EXERCÍCIOS DE FUNÇÕES DE ARRAY
/* EXERCÍCIO 1
const pessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]
//1.a.
console.log(selecionaAdultos(pessoas))
function selecionaAdultos(array) {
    const adultos = array.filter((pessoa, index, array) => {
        if(pessoa.idade >= 20) {
            return true
        }
        return false
    })
    return adultos
}
//1.b
console.log(selecionaJovens(pessoas))
function selecionaJovens(array) {
    const jovens = array.filter((pessoa, index, array) => {
        if(pessoa.idade < 20) {
            return true
        }
        return false
    })
    return jovens
}
*/

/* EXERCÍCIO 2
const array = [1, 2, 3, 4, 5, 6]
//2.a.
function duplicaArray(array) {
    const arrayDois = array.map((elemento) => {
        return elemento*2
    })
    return arrayDois
}
console.log(duplicaArray(array))

//2.b.
function triplicaArrayString(array) {
    const arrayTemporario = array.map((elemento) => {
        return elemento*3
    })
    const arrayTres = arrayTemporario.map((elemento) => {
        return elemento.toString()
    })
    return arrayTres
}
console.log(triplicaArrayString(array))

//2.c.
function arrayParImpar(array){
    const novoArray = []
    for (elemento of array) {
        if(elemento%2 === 0) {
            novoArray.push(`${elemento} é par`)
        } else {
            novoArray.push(`${elemento} é impar`)
        }
    }
    return novoArray
}
console.log(arrayParImpar(array))
*/

/* EXERCÍCIO 3
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

console.log(liberaMontanhaRussa(pessoas))
function liberaMontanhaRussa(array) {
    const pessoasLiberadas = array.filter((pessoa) => {
        if(pessoa.altura>=1.5 && pessoa.idade>14 && pessoa.idade<60) {
            return true
        }
        return false
    })
    return pessoasLiberadas
}

console.log(proibeMontanhaRussa(pessoas))
function proibeMontanhaRussa(array) {
    const pessoasBarradas = array.filter((pessoa) => {
        if(pessoa.altura<1.5 || pessoa.idade<14 || pessoa.idade>60) {
            return true
        }
        return false
    })
    return pessoasBarradas
}
*/

/*EXERCÍCIO 4
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const emailArray = consultas.map((consultas) => {
    let intro = "Sra."
    let lembrar = "lembrá-la"
    let msg
    if (consultas.genero === "masculino") {
        intro = "Sr."
        lembrar = "lembrá-lo"
    }
    if(consultas.cancelada){
        msg = `Olá, ${intro} ${consultas.nome}. Infelizmente, sua consulta marcada para o dia ${consultas.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`
    } else {
        msg = `Olá, ${intro} ${consultas.nome}. Estamos enviando esta mensagem para ${lembrar} da sua consulta no dia ${consultas.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
    }
    return msg
})
console.log(emailArray)
*/

/*EXERCÍCIO 4
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

console.log(distribuiDinheiro(contas))
function distribuiDinheiro(array) {
    array.forEach((cliente) => {
        cliente.saldoTotal += 100000
    })
    return array
}
*/