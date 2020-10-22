//ex2-a)
//A entrada é um array de números e a saída é um objeto com 3 propriedades.

function obterEstatisticas(numeros: number[]): object {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: object = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([6, 4, 5]))

//ex2-b)
//Além da entrada e saída a função cria, dentro do seu escopo, a variável numerosOrdenados, que é um array de números e a variável soma, do tipo número.

//ex2-c)
type amostraDeDados = {
    numeros: number,
    obterEstatisticas: (numeros: number) => object
}