const connection = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'BD_APLICATIVO'
}

const knex = require('knex')({
    client: 'mysql2',
    connection
})
module.exports = {
    knex
}