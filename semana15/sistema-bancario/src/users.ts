export type UserAccount = {
    name: string,
    cpf: number,
    birthDate: number,
    accBalance: number,
    statement: (Transaction | Payment)[]
}

export type Transaction = {
    ammount: number,
    date: number,
    description: string
}

export type Payment = {
    dueDate: number,
    description: string,
    ammount: number,
    cpf: number
}

export const usersAccounts: UserAccount[] = [
    {
        name: "Paulo José",
        cpf: 11122233399,
        birthDate: 657072000000,
        accBalance: 1000,
        statement: [
            {
                ammount: -150,
                date: 1603411200000,
                description: ""
            }
        ]
    },
    {
        name: "Ana Clara",
        cpf: 44455566699,
        birthDate: 233020800000,
        accBalance: 5000,
        statement: [
            {
                ammount: 150,
                date: 1603411200000,
                description: ""
            }
        ]
    },
    {
        name: "Maria Eduarda",
        cpf: 88877700099,
        birthDate: 883699200000,
        accBalance: 100,
        statement: [
            {
                ammount: 50,
                date: 1603324800000,
                description: ""
            }
        ]
    }
]