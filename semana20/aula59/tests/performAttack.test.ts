import { performAttack, performAttackWithInversion } from "../src/performAttack"

describe('test attacks', () => {
    it('should perform an attack', () => {
        const mockValidator = jest.fn(() => {
			return true
        })
        
        const attacker:Fighter = {
            name: 'John Doe',
            health: 1500,
            defense: 400,
            attack: 800
        }

        const defender:Fighter = {
            name: 'Mary Harper',
            health: 1500,
            defense: 600,
            attack: 600
        }

        performAttackWithInversion(attacker, defender, mockValidator as any)

        expect(defender.health).toEqual(1300)
        expect(mockValidator).toHaveBeenCalled()
        expect(mockValidator).toBeCalledTimes(2)
        expect(mockValidator).toHaveReturnedTimes(2)
    })
    it('should not perform an attack with invalid fighter', () => {
        const mockValidator = jest.fn(() => {
            return false
        })
        
        const attacker:Fighter = {
            name: 'John Doe',
            health: 1500,
            defense: 0,
            attack: 800
        }
        
        const defender:Fighter = {
            name: 'Mary Harper',
            health: 1500,
            defense: 600,
            attack: 600
        }
        
        try {
            performAttackWithInversion(attacker, defender, mockValidator as any)
        } catch (error) {
            expect(error.message).toBe("Invalid fighter.")
            expect(mockValidator).toHaveBeenCalled()
            expect(mockValidator).toBeCalledTimes(1)
            expect(mockValidator).toHaveReturnedTimes(1)
        }
        
    })
})
