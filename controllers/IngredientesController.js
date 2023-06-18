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
    const { id } = req.params;
    try {
        const result = await
            knex.select('*').from('ingredientes').where('cod_ingredientes', id)
        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send(`Erro ao buscar ingredientes - ${cod_ingredientes} `);
    }
};

exports.post = async (req, res, next) => {
    let ingredientes = req.body;

    try {
        const result = await
            knex('ingredientes')
                .insert(ingredientes)
        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao tentar inserir novo ingrediente');
    }
};

// put = alterar ingredientes
exports.put = async (req, res, next) => {
    let ingredientes = req.body;
    let cod_ingredientes = req.params.id

    try {
        const result = await
            knex('ingredientes')
                .where('cod_ingrediente', cod_ingredientes)
                .update(ingredientes);

        res.json(result);

    } catch (err) {
        console.log(err);
        res.sendStatus(500).send('Erro ao tentar alterar ingrediente');
    }
};

exports.delete = async (req, res, next) => {
    let cod_ingredientes = req.params.id;
    try {
        const result = await
            knex('ingredientes')
                .where('cod_ingrediente', cod_ingredientes)
                .del();

        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao tentar deletar ingredientes');
    }
};