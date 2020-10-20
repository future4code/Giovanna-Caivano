type dish = {
    name: string,
    cost: number,
    sellingPrice: number,
    ingredients: string[]
}

type ticket = {
    dishName: string,
    clientName: string
}

const menu: dish[] = []
const orders: ticket[] = []

function addDishToMenu(name: string, cost: number, sellingPrice: number, ingredients: string[]): void {
    menu.push({
        name: name,
        cost: cost,
        sellingPrice: sellingPrice,
        ingredients: ingredients
    })
}

function findDishPriceByName(searchName: string): any {
    const foundDish: dish | undefined = menu.find(item => { return item.name === searchName })
    return foundDish === undefined ? 'Prato não encontrado' : foundDish.sellingPrice
}

function makeOrder(clientName: string, dishName: string): void {
    orders.push({
        dishName: dishName,
        clientName: clientName
    })
}

function calcProfit(orders: ticket[]): number {
    let profit = 0

    for(let order of orders){
        //A TERMINAR
    }
    return profit
}

addDishToMenu('Carbonara', 9, 45, ['massa', 'ovos', 'bacon', 'sal'])
addDishToMenu('Frango Xadrez', 10, 35, ['frango', 'pimentão', 'cebola', 'amendoim', 'shoyu'])
addDishToMenu('Hamburguer Vegano', 10, 35, ['burguer de falafel', 'maionese de girassol', 'alface', 'cheddar vegano', 'shimeji'])
console.log(menu)
console.log(findDishPriceByName('Carbonara'))
console.log(findDishPriceByName('Brigadeiro'))
makeOrder('Giovanna', 'Hamburguer Vegano')
console.log(orders)

