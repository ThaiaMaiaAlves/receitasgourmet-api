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
    const id_receita = req.body.id_receita;
    try {
        const result = await
            knex.select('*').from('receita').where('id_receita', id_receita)
        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send(`Erro ao buscar receita - ${id_receita} `);
    }
};

exports.post = async (req, res, next) => {
    let receita = req.body;
    try {
        const result = await
            knex('receita')
                .transacting(trx)
                .returning('id')
                .insert(receita)
                .then(trx.commit)
                .catch(trx.rollback);

        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao tentar inserir novo receita');
    }
};
// put = alterar receita
exports.put = async (req, res, next) => {
    let receita = req.body;
    let id = req.params.id
    try {
        const result = await
            knex('receita')
                .transacting(trx)
                .returning('id')
                .where('id', id)
                .update(receita)
                .then(trx.commit)
                .catch(trx.rollback);

        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao tentar alterar receita');
    }
};
exports.delete = async (req, res, next) => {
    let id = req.params.id;
    try {
        const result = await
            knex('receita')
                .returning('id')
                .where('id', id)
                .del();

        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao tentar deletar receita');
    }
};