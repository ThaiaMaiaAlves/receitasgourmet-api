const { knex } = require("../database");

//get = ler tabela ingredientes
exports.get = async (req, res, next) => {
    try {
        const result = await
            knex.select('*').from('ingredientes')
        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao buscar ingredientes');
    }
};

// get by id
// async = é uma função assíncrona 
exports.getById = async (req, res, next) => {
    const cod_ingredientes = req.body.cod_ingredientes;
    try {
        const result = await
            knex.select('*').from('ingredientes').where('cod_ingredientes', cod_ingredientes)
        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send(`Erro ao buscar ingredientes - ${cod_ingredientes} `);
    }
};

exports.post = async (req, res, next) => {
    let ingredientes = req.body;

    knex.transaction(function (trx) {
        knex('ingredientes')
            .transacting(trx)
            .insert(ingredientes)
            .then(trx.commit)
            .catch(trx.rollback);
    })
        .then(function (result) {
            res.send(result)
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).send('Erro ao tentar inserir novo ingrediente');
        })

};
// put = alterar ingredientes
exports.put = async (req, res, next) => {
    let ingredientes = req.body;
    let cod_ingredientes = req.params.id

    knex.transaction(function (trx) {
        knex('ingredientes')
            .transacting(trx)
            .where('cod_ingredientes', cod_ingredientes)
            .update(ingredientes)
            .then(trx.commit)
            .catch(trx.rollback);
    })
        .then(function (result) {
            res.sendStatus(200)
        })
        .catch(function (err) {
            console.log(err);
            res.sendStatus(500).send('Erro ao tentar alterar ingrediente');
        })
};
exports.delete = async (req, res, next) => {
    let cod_ingredientes = req.params.id;
    try {
        const result = await
            knex('ingredientes')
                .where('cod_ingredientes', cod_ingredientes)
                .del();

        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao tentar deletar ingredientes');
    }
};