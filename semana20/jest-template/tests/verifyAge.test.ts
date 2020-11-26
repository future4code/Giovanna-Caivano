import { LOCATION, NATIONALITY, Result, verifyAge } from '../src/verifyAge'

describe('test verifyAge', () => {
    it('should return brazilian user as allowed', () => {
        const result:Result = verifyAge(
            {
                name: 'Casino',
                location: LOCATION.BRAZIL
            },
            [{
                name: 'Maria Souza',
                age: 20,
                nationality: NATIONALITY.BRAZILIAN
            }]
        )

        expect(result.brazilians.allowed).toContain('Maria Souza')
    })
    it('should return american user', () => {
        const result:Result = verifyAge(
            {
                name: 'Casino',
                location: LOCATION.BRAZIL
            },
            [{
                name: 'John Doe',
                age: 20,
                nationality: NATIONALITY.AMERICAN
            }]
        )

        expect(result.americans.allowed).toContain('John Doe')
    })
    it('should return all not allowed', () => {
        const result:Result = verifyAge(
            {
                name: 'Casino',
                location: LOCATION.EUA
            },
            [
                {
                    name: 'Maria Souza',
                    age: 19,
                    nationality: NATIONALITY.BRAZILIAN
                },
                {
                    name: 'João Souza',
                    age: 19,
                    nationality: NATIONALITY.BRAZILIAN
                },
                {
                    name: 'Rachel Doe',
                    age: 19,
                    nationality: NATIONALITY.AMERICAN
                },
                {
                    name: 'John Doe',
                    age: 19,
                    nationality: NATIONALITY.AMERICAN
                }
            ]
        )

        expect(result.americans.notAllowed.length).toEqual(2)
        expect(result.brazilians.notAllowed.length).toEqual(2)
    })
    it('should return americans allowed and brazilians not allowed', () => {
                const result:Result = verifyAge(
                    {
                        name: 'Casino',
                        location: LOCATION.EUA
                    },
                    [
                        {
                            name: 'Maria Souza',
                            age: 19,
                            nationality: NATIONALITY.BRAZILIAN
                        },
                        {
                            name: 'João Souza',
                            age: 19,
                            nationality: NATIONALITY.BRAZILIAN
                        },
                        {
                            name: 'Rachel Doe',
                            age: 21,
                            nationality: NATIONALITY.AMERICAN
                        },
                        {
                            name: 'John Doe',
                            age: 21,
                            nationality: NATIONALITY.AMERICAN
                        }
                    ]
                )
        
                expect(result.americans.allowed.length).toEqual(2)
                expect(result.brazilians.notAllowed.length).toEqual(2)

    })
    it('should return brazilian allowed', () => {
        const result:Result = verifyAge(
            {
                name: 'Casino',
                location: LOCATION.BRAZIL
            },
            [
                {
                    name: 'Maria Souza',
                    age: 19,
                    nationality: NATIONALITY.BRAZILIAN
                }
            ]
        )

        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
        expect(result.brazilians.allowed.length).toBeLessThan(2)
    })
    it('should return empty not allowed americans', () => {
        const result:Result = verifyAge(
            {
                name: 'Casino',
                location: LOCATION.BRAZIL
            },
            [
                {
                    name: 'John Doe',
                    age: 19,
                    nationality: NATIONALITY.AMERICAN
                }
            ]
        )

        expect(result.americans.notAllowed.length).toBe(0)
    })
    it('should return all not allowed', () => {
        const result:Result = verifyAge(
            {
                name: 'Casino',
                location: LOCATION.EUA
            },
            [
                {
                    name: 'Maria Souza',
                    age: 19,
                    nationality: NATIONALITY.BRAZILIAN
                },
                {
                    name: 'João Souza',
                    age: 19,
                    nationality: NATIONALITY.BRAZILIAN
                },
                {
                    name: 'Rachel Doe',
                    age: 19,
                    nationality: NATIONALITY.AMERICAN
                },
                {
                    name: 'John Doe',
                    age: 19,
                    nationality: NATIONALITY.AMERICAN
                }
            ]
        )

        expect(result.brazilians.notAllowed).toContain('Maria Souza')
        expect(result.americans.notAllowed).toContain('John Doe')
    })
    it('should return only allowed americans', () => {
        const result:Result = verifyAge(
            {
                name:'Casino',
                location: LOCATION.EUA
            },
            [
                {
                    name: 'Maria Souza',
                    age: 19,
                    nationality: NATIONALITY.BRAZILIAN
                },
                {
                    name: 'João Souza',
                    age: 19,
                    nationality: NATIONALITY.BRAZILIAN
                },
                {
                    name: 'Rachel Doe',
                    age: 21,
                    nationality: NATIONALITY.AMERICAN
                },
                {
                    name: 'John Doe',
                    age: 21,
                    nationality: NATIONALITY.AMERICAN
                }
            ]
        )

        expect(result.brazilians.notAllowed.length).toBeGreaterThan(1)
        expect(result.americans.notAllowed.length).toBeLessThan(1)
        expect(result.americans.allowed.length).toBe(2)
    })
})