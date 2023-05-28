const { knex } = require("../database");

//get = ler tabela receita
exports.get = async (req, res, next) => {
    try {
        const result = await
            knex.select('*').from('receita')
        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao buscar receita');
    }
};

// get by id
// async = é uma função assíncrona 
exports.getById = async (req, res, next) => {
    const cod_receita = req.body.cod_receita;
    try {
        const result = await
            knex.select('*').from('receita').where('cod_receita', cod_receita)
        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send(`Erro ao buscar receita - ${cod_receita} `);
    }
};

exports.post = async (req, res, next) => {
    let receita = req.body;

    knex.transaction(function (trx) {
        knex('receita')
            .transacting(trx)
            .insert(receita)
            .then(trx.commit)
            .catch(trx.rollback);
    })
        .then(function (result) {
            res.send(result)
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).send('Erro ao tentar inserir nova receita');
        })

};
// put = alterar receita
exports.put = async (req, res, next) => {
    let receita = req.body;
    let cod_receita = req.params.id

    knex.transaction(function (trx) {
        knex('receita')
            .transacting(trx)
            .where('cod_receita', cod_receita)
            .update(receita)
            .then(trx.commit)
            .catch(trx.rollback);
    })
        .then(function (result) {
            res.sendStatus(200)
        })
        .catch(function (err) {
            console.log(err);
            res.sendStatus(500).send('Erro ao tentar alterar receita');
        })
};
exports.delete = async (req, res, next) => {
    let cod_receita = req.params.id;
    try {
        const result = await
            knex('receita')
                .where('cod_receita', cod_receita)
                .del();

        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao tentar deletar receita');
    }
};