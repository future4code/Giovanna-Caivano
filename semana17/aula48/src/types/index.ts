export type Search = {
    name: string,
    type: string
}

export type SpecificSearch = {
    name: string,
    type: string,
    orderBy: string,
    orderType: string,
    page: number
}

export type User = {
    id: string,
    name: string,
    email: string,
    type: string
}
