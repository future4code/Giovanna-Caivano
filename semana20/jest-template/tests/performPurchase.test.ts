import {User, performPurchase} from '../src/performPurchase'

describe('perform purchase', () => {
    it('should return user since balance greater than value', () => {
        const result:User = performPurchase({
            name: 'Giovanna',
            balance: 30
        }, 20)

        expect(result).toEqual({ name: 'Giovanna', balance: 10})
    })
    it('should return user since balance equals value', () => {
        const result:User = performPurchase({
            name: 'Giovanna',
            balance: 30
        }, 30)

        expect(result).toEqual({ name: 'Giovanna', balance: 0})
    })
    it('should return undefined since balance lower than value', () => {
        const result:User = performPurchase({
            name: 'Giovanna',
            balance: 10
        }, 20)

        expect(result).toEqual(undefined)
    })

})