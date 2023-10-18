const { knex } = require("../database");

//get = ler tabela receita
exports.get = async (req, res, next) => {
    try {
        const result = await
            knex.select('*').from('receitas')
        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao buscar receita');
    } finally {
        next()
    }
};

// get by id
// async = é uma função assíncrona 
exports.getById = async (req, res, next) => {
    const { id } = req.params;
    
    try {
        const result = await
            knex.select('*').from('receitas').where('cod_receita', id)
        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send(`Erro ao buscar receita - ${id} `);
    } finally {
        next()
    }
};

exports.post = async (req, res, next) => {
    let receita = req.body;

    knex.transaction(function (trx) {
        knex('receitas')
            .transacting(trx)
            .insert(receita)
            .then(trx.commit)
            .catch(trx.rollback);
    })
        .then(function (result) {
            res.status(200).send(result)
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).send('Erro ao tentar inserir nova receita');
        })
        .finally(function () {
            next()
        })

};
// put = alterar receita
exports.put = async (req, res, next) => {
    let receita = req.body;
    let cod_receita = req.params.id

    knex.transaction(function (trx) {
        knex('receitas')
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
        .finally(function () {
            next()
        })
};
exports.delete = async (req, res, next) => {
    let cod_receita = req.params.id;
    try {
        const result = await
            knex('receitas')
                .where('cod_receita', cod_receita)
                .del();

        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao tentar deletar receita');
    } finally {
        next()
    }
};