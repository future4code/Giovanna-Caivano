export enum TYPES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type user = {
    id: number,
    name: string,
    email: string,
    type: TYPES,
    age: number
}

export const users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: TYPES.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: TYPES.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: TYPES.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: TYPES.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: TYPES.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: TYPES.ADMIN,
        age: 60
    }
]
