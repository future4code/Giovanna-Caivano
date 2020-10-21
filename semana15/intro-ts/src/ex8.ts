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

function calcProfit(orders: ticket[], menu: dish[]): number {
    const profitArray: number[] = []

    for(let ticket of orders){
        let orderedDish: dish | undefined = menu.find(dish => { return dish.name === ticket.dishName })
        if(orderedDish) profitArray.push(orderedDish.sellingPrice-orderedDish.cost)
    }

    let profit: number = profitArray.reduce((total, num) => { return total + num })

    return profit
}

addDishToMenu('Carbonara', 9, 45, ['massa', 'ovos', 'bacon', 'sal'])
addDishToMenu('Frango Xadrez', 10, 35, ['frango', 'pimentão', 'cebola', 'amendoim', 'shoyu'])
addDishToMenu('Hamburguer Vegano', 10, 35, ['burguer de falafel', 'maionese de girassol', 'alface', 'cheddar vegano', 'shimeji'])
makeOrder('Giovanna', 'Hamburguer Vegano')
makeOrder('Renato', 'Carbonara')
console.log(calcProfit(orders, menu))

