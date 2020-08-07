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