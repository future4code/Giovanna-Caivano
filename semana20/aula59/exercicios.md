## Exercício 1

### a)
```
interface Fighter {
    name:string,
    health:number,
    defense:number,
    attack:number
}
```

### b)
```
export const validateCharacter = (input: Fighter) => {
    if( !input.name || !input.health || !input.defense || !input.attack){
        return false
    }

    if(input.health < 0 || input.attack <= 0 || input.defense <= 0){
        return false
    }

    return true
}
```

## Exercício 2

### a)
```
it('should return false for empy name', () => {
    const result = validateCharacter({
        name: '',
        health: 1500,
        defense: 800,
        attack: 700
    })

    expect(result).toBe(false)
})
```
### b)
```
it('should return true for health = 0', () => {
    const result = validateCharacter({
        name: 'Goku',
        health: 0,
        defense: 800,
        attack: 700
    })

    expect(result).toBe(true)
})
```

### c)
```
it('should return false for attack = 0', () => {
    const result = validateCharacter({
        name: 'Goku',
        health: 1500,
        defense: 800,
        attack: 0
    })

    expect(result).toBe(false)
})
```

### d)
```
it('should return false for defense = 0', () => {
    const result = validateCharacter({
        name: 'Goku',
        health: 1500,
        defense: 0,
        attack: 7000
    })

    expect(result).toBe(false)
})
```

### e)
```
it('should return false for NEGATIVE health', () => {
    const result = validateCharacter({
        name: 'Goku',
        health: -100,
        defense: 700,
        attack: 700
    })

    expect(result).toBe(false)
})
```

### f)
```
it('should return true for valid input', () => {
    const result = validateCharacter({
        name: 'Goku',
        health: 1000,
        defense: 700,
        attack: 700
    })

    expect(result).toBe(true)
})
```

## Exercício 3

### a)
```
export const performAttack = (attacker:Fighter, defender:Fighter):Fighter[] => {
    if(!validateCharacter(attacker) || !validateCharacter(defender)){
        throw new Error("Invalid fighter.");
    }

    if(defender.defense > attacker.attack){
        return [attacker, defender]
    }

    return [{
        ...defender,
        health: defender.health - (attacker.attack - defender.defense)
    }, 
    attacker]
}
```

### b)
```
export const performAttackWithInversion = (
    attacker:Fighter, 
    defender:Fighter, 
    validator: (input:any) => boolean
    ) => {
        if(!validator(attacker) || !validator(defender)){
            throw new Error("Invalid fighter.");
        }

        if(attacker.attack > defender.defense){
            defender.health -= attacker.attack - defender.defense
        }
    }
```

### c)
Na primeira versão estamos efetivamente utilizando a função que valida o lutador. Na segunda, não.

## Exercício 4

### a) 
Da função que valida o lutador, porque se o lutador não tiver dados válidos, não poderemos executar a função seguinte, a do ataque.

### b) 
```
test("Creating mocks", () => {
    const mockValidator = jest.fn(() => {
			return true
		});
});
```
### c) 
```
test("Creating mocks", () => {
    const mockValidator = jest.fn(() => {
			return false
		});
});
```

## Exercício 5

### a)
```
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
```

### b)
```
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
```