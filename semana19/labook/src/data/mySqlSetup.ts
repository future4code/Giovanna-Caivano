import BaseDatabase from "./BaseDatabase"

class CreateTables extends BaseDatabase {
    
    public async createUsersTable():Promise<void> {
        try {
            await BaseDatabase.connection.schema
            .hasTable('labook_users')
            .then(function(exists:any){
                if(!exists){
                    return BaseDatabase.connection.schema
                    .createTable('labook_users', (table:any) => {
                        table.string('id').primary()
                        table.string('name').notNullable()
                        table.string('email').notNullable().unique()
                        table.string('password').notNullable()
                    })
                }
            })
        } catch (error) {
            throw new Error(error.sqlMessage);
        }
    }
    
    public async createPostsTable():Promise<void> {
        try {
            await BaseDatabase.connection.schema
            .hasTable('labook_posts')
            .then(function(exists:any){
                if(!exists){
                    return BaseDatabase.connection.schema
                    .createTable('labook_posts', (table:any) => {
                        table.string('id').primary()
                        table.string('photo').notNullable()
                        table.string('description').notNullable()
                        table.enu('type', ['normal', 'event']).defaultTo('normal')
                        table.timestamp('created_at').defaultTo(BaseDatabase.connection.fn.now())
                        table.string('author_id')
                        table.foreign('author_id').references('labook_users')
                    })
                }
            })
        } catch (error) {
            throw new Error(error.sqlMessage);
        }
    }

    public async createFollowingTable():Promise<void> {
        try {
            await BaseDatabase.connection.schema
            .hasTable('labook_following_users_relation')
            .then(function(exists:any){
                if(!exists){
                    return BaseDatabase.connection.schema
                    .createTable('labook_following_users_relation', (table:any) => {
                        table.string('follower_user').notNullable()
                        table.string('followed_user').notNullable()
                        table.foreign('follower_user').references('labook_users.id')
                        table.foreign('followed_user').references('labook_users.id')
                    })
                }
            })
        } catch (error) {
            throw new Error(error.sqlMessage);
        }
    }
}

const createTables = new CreateTables()
const createTablesAtDB = async () => {
    try {
        await createTables.createUsersTable()
        createTables.createPostsTable()
        createTables.createFollowingTable()
    } catch (error) {
        console.log(error)
    }
}

createTablesAtDB()
