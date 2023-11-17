/* Conexão remota rodar banco em nuvem */
const connection = {
    host: 'node159858-receitasbd.jelastic.saveincloud.net',
    port: 12756,
    user: 'root',
    password: 'LTVfqt11129',
    database: 'bd_receitas_gourmet'
}

/* Conexão local(rodar banco na maquina) */
// const connection = {
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: '123456789',
//     database: 'bd_receitas_gourmet'
// }

const knex = require('knex')({
    client: 'mysql2',
    connection
})
module.exports = {
    knex
}