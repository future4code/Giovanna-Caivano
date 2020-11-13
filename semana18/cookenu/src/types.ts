export type User = {
    id: string,
    email: string,
    name: string,
    password: string
}

export type Recipe = {
    title: string,
    description: string,
    create_date: Date,
    recipe_creator_id: string
}
