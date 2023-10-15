const connection = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456789',
    database: 'bd_receitas_gourmet'
}

const knex = require('knex')({
    client: 'mysql2',
    connection
})
module.exports = {
    knex
}