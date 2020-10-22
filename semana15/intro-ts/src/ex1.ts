//ex1
//a)
let minhaString: string = 'um valor'
//Ao atribuir o valor de minhaString para um número o código quebra, já que o tipo número não pode ser atribuído a uma variável do tipo string.

//b)
let meuNumero: number | string = 27
meuNumero = '27'

//c)
enum CORES_DO_ARCOIRIS {
    VERMELHO = 'vermelho',
    LARANJA = 'laranja',
    AMARELO = 'amarelo',
    VERDE = 'verde',
    AZUL = 'azul',
    ANIL = 'anil',
    VIOLETA = 'violeta'
}
type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES_DO_ARCOIRIS
}


const ana: Pessoa = {
    nome: 'Ana',
    idade: 25,
    corFavorita: CORES_DO_ARCOIRIS.ANIL
}

const joao: Pessoa = {
    nome: 'João',
    idade: 19,
    corFavorita: CORES_DO_ARCOIRIS.VERDE
}

const paulo: Pessoa = {
    nome: 'Paulo',
    idade: 35,
    corFavorita: CORES_DO_ARCOIRIS.AMARELO
}