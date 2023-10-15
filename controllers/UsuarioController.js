const { knex } = require("../database");
const bcrypt = require('bcrypt');

//get = ler tabela usuarios
exports.get = async (req, res, next) => {
    try {
        const result = await
            knex.select('*').from('usuarios')
        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao buscar usuários');
    } finally {
        next()
    }
};

// get by id
// async = é uma função assíncrona 
exports.getById = async (req, res, next) => {
    const cod_usuario = req.params.id;
    try {
        const result = await
            knex.select('*').from('usuarios').where('cod_usuario', cod_usuario)
        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send(`Erro ao buscar usuário - ${cod_usuario} `);
    }
};
// get by email
// async = é uma função assíncrona 
exports.getByEmail = async (req, res, next) => {
    const email = req.body.email;
    try {
        const result = await
            knex.select('*').from('usuarios').where('email', email)
        res.json(result);

    } catch (err) {
        res.status(500).send(`Erro ao buscar usuário - ${email} `);
    } finally {
        next()
    }
};

exports.post = async (req, res, next) => {
    let usuario = req.body;
    //usuario.senha = await bcrypt.hash(usuario.senha, 10)
    usuario.senha = usuario.senha

    try {
        const result = await
            knex('usuarios')
                .insert(usuario);

        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao tentar inserir novo usuário');
    } finally {
        next()
    }
};
// put = alterar usuário
exports.put = async (req, res, next) => {
    let usuario = req.body;
    let id = req.params.id
    try {
        const result = await
            knex('usuarios')
                .where('cod_usuario', id)
                .update(usuario);

        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao tentar alterar usuário');
    } finally {
        next()
    }
};
exports.delete = async (req, res, next) => {
    let id = req.params.id;
    try {
        const result = await
            knex('usuarios')
                .where('cod_usuario', id)
                .del();

        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(500).send('Erro ao tentar deletar usuário');
    } finally {
        next()
    }
};

exports.authRoute = async (req, res, next) => {
    console.log('Tentando autenticar', res);
    res.status(200)
        .json({
            statusCode: 200,
            message: 'Rota autenticada!'
        })
}