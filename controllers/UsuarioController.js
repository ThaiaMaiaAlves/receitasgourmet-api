const { knex } = require("../database");

//get = ler tabela usuario
exports.get = async (req, res, next) => {
    try {
        const result = await
            knex.select('*').from('usuario')
        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao buscar usuários');
    }
};

// get by id
// async = é uma função assíncrona 
exports.getByEmail = async (req, res, next) => {
    const email = req.body.email;
    try {
        const result = await
            knex.select('*').from('usuario').where('email', email)
        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send(`Erro ao buscar usuário - ${email} `);
    }
};

exports.post = async (req, res, next) => {
    let usuario = req.body;
    try {
        const result = await
            knex('usuario')
                .returning('id')
                .insert(usuario);

        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao tentar inserir novo usuário');
    }
};
// put = alterar usuário
exports.put = async (req, res, next) => {
    let usuario = req.body;
    let id = req.params.id
    try {
        const result = await
            knex('usuario')
                .returning('id')
                .where('id', id)
                .update(usuario);

        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao tentar alterar usuário');
    }
};
exports.delete = async (req, res, next) => {
    let id = req.params.id;
    try {
        const result = await
            knex('usuario')
                .returning('id')
                .where('id', id)
                .del();

        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao tentar deletar usuário');
    }
};

exports.authRoute = async (req, res, next) => {
    res.status(200)
        .json({
            statusCode: 200,
            message: 'Rota autenticada!'
        })
}