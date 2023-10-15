const { knex } = require("../database");

//get = ler tabela receita
exports.get = async (req, res, next) => {
    try {
        const result = await
            knex.select('*').from('un_medidas')
        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao buscar unidade de medida');
    } finally {
        next()
    }
};

// get by id
// async = é uma função assíncrona 
exports.getById = async (req, res, next) => {
    const cod_un_medida = req.body.cod_un_medida;
    try {
        const result = await
            knex.select('*').from('un_medidas').where('cod_un_medida', cod_un_medida)
        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send(`Erro ao buscar unidade de medida - ${cod_un_medida} `);
    } finally {
        next()
    }
};

exports.post = async (req, res, next) => {
    let un_medida = req.body;

    knex.transaction(function (trx) {
        knex('un_medidas')
            .transacting(trx)
            .insert(un_medida)
            .then(trx.commit)
            .catch(trx.rollback);
    })
        .then(function (result) {
            res.send(result)
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).send('Erro ao tentar inserir nova un_medida');
        })
        .finally(function () {
            next()
        })

};
// put = alterar receita
exports.put = async (req, res, next) => {
    let un_medida = req.body;
    let cod_un_medida = req.params.id

    knex.transaction(function (trx) {
        knex('un_medidas')
            .transacting(trx)
            .where('cod_un_medida', cod_un_medida)
            .update(un_medida)
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
    let cod_un_medida = req.params.id;
    try {
        const result = await
            knex('un_medidas')
                .where('cod_un_medida', cod_un_medida)
                .del();

        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao tentar deletar unidade de medida');
    } finally {
        next()
    }
};