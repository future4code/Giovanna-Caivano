enum CLOTHES_TYPES {
    VERAO = 'Verão',
    INVERNO = 'Inverno',
    BANHO = 'Banho',
    INTIMAS = 'Íntimas'
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
    calcDiscount: (price: number, clothType: string) => number
}

function calcDiscount(price: number, clothType: string) {
    let discount: number = 0

    switch(clothType){
        case 'Verão':
            discount = 0.05
            break
        case 'Inverno':
            discount = 0.10
            break
        case 'Banho':
            discount = 0.04
            break
        case 'Íntimas':
            discount = 0.07
            break
    }
    return price*(1-discount)
}

function getDiscountedPrice(products: product[]): product[] {
    return products.map(item => { return {...item, discountedprice: item.calcDiscount(item.price, item.clothType)} })
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
