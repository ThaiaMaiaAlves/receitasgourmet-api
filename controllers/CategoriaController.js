const { knex } = require("../database");

//get = ler tabela categoria
exports.get = async (req, res, next) => {
    try {
        const result = await
            knex.select('*').from('categorias')
        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao buscar categoria');
    }
};

// get by id
// async = é uma função assíncrona 
exports.getById = async (req, res, next) => {
    const cod_categoria = req.body.cod_categoria;
    try {
        const result = await
            knex.select('*').from('categorias').where('cod_categoria', cod_categoria)
        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send(`Erro ao buscar categoria - ${cod_categoria} `);
    }
};

exports.post = async (req, res, next) => {
    let categoria = req.body;

    try {
        await knex.transaction(function (trx) {
            knex('categorias')
                .transacting(trx)
                .insert(categoria)
                .then(trx.commit)
                .catch(trx.rollback);
            res.json(res.data);
        })
    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao tentar inserir nova categoria');
    }
};
// put = alterar categoria
exports.put = async (req, res, next) => {
    let categoria = req.body;
    let cod_categoria = req.params.id
    try {
        const result = await
            knex('categorias')
                .transacting(trx)
                .returning('cod_categoria')
                .where('cod_categoria', cod_categoria)
                .update(categoria)
                .then(trx.commit)
                .catch(trx.rollback);

        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao tentar alterar categoria');
    }
};
exports.delete = async (req, res, next) => {
    let cod_categoria = req.params.id;
    try {
        const result = await
            knex('categorias')
                .returning('cod_categoria')
                .where('cod_categoria', cod_categoria)
                .del();

        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao tentar deletar categoria');
    }
};