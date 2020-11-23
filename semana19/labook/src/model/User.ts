export interface CreateUserInput {
    name:string,
    email:string,
    password:string
}

export interface LoginInput {
    email:string,
    password:string
}
export type CreateUserOutput = {
    token: string
}

export type LoginOutput = {
    token: string
}

export class User {

    constructor(
        private id:string,
        private name:string,
        private email:string,
        private password:string,
    ){}

    public getId = ():string => this.id
    public getName = (): string => this.name
    public getEmail = (): string => this.email
    public getPassword = (): string => this.password  
}
