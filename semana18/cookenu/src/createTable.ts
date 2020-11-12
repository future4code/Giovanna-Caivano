import { connection } from './'

const createUsersTable = async (): Promise<void> => {
    try {
        await connection.schema.hasTable('users').then(function(exists){
            if(!exists){
                return connection.schema.createTable('users', (table: any) => {
                    table.uuid('id').primary()
                    table.string('name').notNullable()
                    table.string('email').notNullable().unique()
                    table.string('password').notNullable()
                })
            }
        })
    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

const createRecipesTable = async (): Promise<void> => {
    try {
        await connection.schema.hasTable('recipes').then(function(exists){
            if(!exists){
                return connection.schema.createTable('recipes', (table: any) => {
                    table.increments('id').primary()
                    table.string('title').notNullable()
                    table.string('description').notNullable()
                    table.datetime('create_date').notNullable()
                    table.string('recipe_creator_id').references('users.id')
                })
            }
        })
    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

createUsersTable()
createRecipesTable()
