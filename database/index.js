const connection = {
    user: 'root',
    password: '123456',
    server: 'localhost',
    port: 3306,
    database: 'BD_APLICATIVO'
}

const knex = require('knex')({
    client: 'mysql2',
    connection
})
module.exports = {
    knex
}