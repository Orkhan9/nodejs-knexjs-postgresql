module.exports={
    development:{
        client:'postgresql',
        connection:{
            user:'postgres',
            password:'12345',
            database:'knexjs',
            host:'localhost',
            port:5432
        },
        pool:{
            min:2,
            max:10
        },
        migrations:{
            tableName:'knex_migrations'
        }
    }
}
