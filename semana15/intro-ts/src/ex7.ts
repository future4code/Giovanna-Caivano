enum CLOTHES_TYPES {
    VERAO = 'VERAO',
    INVERNO = 'INVERNO',
    BANHO = 'BANHO',
    INTIMAS = 'INTIMAS'
}

enum DISCOUNTS {
    VERAO =  0.05,
    INVERNO = 0.10,
    BANHO = 0.04,
    INTIMAS = 0.07
}

type product = {
    name: string,
    price: number,
    clothType: CLOTHES_TYPES
    calcDiscount: (item: product) => number
}

function calcDiscount(item: product): number {
    return item.price*(1-DISCOUNTS[item.clothType])
}

function getDiscountedPrice(products: product[]): product[] {
    return products.map(item => { return {...item, discountedprice: item.calcDiscount(item)} })
}

const products: product[] = [
    {
        name: 'Maiô',
        price: 345,
        clothType: CLOTHES_TYPES.BANHO,
        calcDiscount
    },
    {
        name: 'Brusinha',
        price: 45,
        clothType: CLOTHES_TYPES.VERAO,
        calcDiscount
    }    
]

console.log(getDiscountedPrice(products))
