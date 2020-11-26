export enum LOCATION {
    EUA = 'EUA',
    BRAZIL = 'BRAZIL'
}

export enum NATIONALITY {
    BRAZILIAN = 'BRAZILIAN',
    AMERICAN = 'AMERICAN'
}

export interface User {
    name:string,
    age:number,
    nationality:NATIONALITY
}

export interface Casino {
    name:string,
    location:LOCATION
}

export interface ResultItem {
    allowed:string[],
    notAllowed:string[]
}

export interface Result {
    brazilians:ResultItem,
    americans:ResultItem
}

export function verifyAge(casino:Casino, users:User[]):Result {
    const allowedBr:string[] = []
    const notAllowedBr:string[] = []
    const allowedUs:string[] = []
    const notAllowedUs:string[] = []

    if (casino.location === LOCATION.BRAZIL) {
        users.forEach(user => {
            if (user.nationality === NATIONALITY.BRAZILIAN) {
                if(user.age >= 18){
                    allowedBr.push(user.name)
                } else {
                    notAllowedBr.push(user.name)
                }
            } else if (user.nationality === NATIONALITY.AMERICAN) {
                if(user.age >= 18){
                    allowedUs.push(user.name)
                } else {
                    notAllowedUs.push(user.name)
                }
            }
        })
    }

    if (casino.location === LOCATION.EUA) {
        users.forEach(user => {
            if (user.nationality === NATIONALITY.BRAZILIAN) {
                if(user.age >= 21){
                    allowedBr.push(user.name)
                } else {
                    notAllowedBr.push(user.name)
                }
            } else if (user.nationality === NATIONALITY.AMERICAN) {
                if(user.age >= 21){
                    allowedUs.push(user.name)
                } else {
                    notAllowedUs.push(user.name)
                }
            }
        })
    }

    return {
        brazilians: {
            allowed: allowedBr,
            notAllowed: notAllowedBr
        },
        americans: {
            allowed: allowedUs,
            notAllowed: notAllowedUs
        }
    }
}
