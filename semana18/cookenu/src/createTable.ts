import { connection } from './'

const createUsersTable = async (): Promise<void> => {
    try {
        await connection.schema.hasTable('users').then(function(exists){
            if(!exists){
                return connection.schema.createTable('users', (table: any) => {
                    table.string('id').primary()
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
                    table.text('description').notNullable()
                    table.date('create_date').notNullable()
                    table.string('recipe_creator_id').notNullable()
                    table.foreign('recipe_creator_id').references('users.id')
                })
            }
        })
    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

const createUsersFollowingTable = async (): Promise<void> => {
    try {
        await connection.schema.hasTable('users_followers').then(function(exists){
            if(!exists){
                return connection.schema.createTable('users_followers', (table:any)=> {
                    table.string('follower_user').notNullable()
                    table.string('followed_user').notNullable()
                    table.foreign('follower_user').references('users.id')
                    table.foreign('followed_user').references('users.id')
                })
            }
        })
    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

const createTables = async (): Promise<void> => {
    try {
        await createUsersTable()
        await createRecipesTable()
        createUsersFollowingTable()
    } catch (error) {
        console.log(error)
    }
}

createTables()
