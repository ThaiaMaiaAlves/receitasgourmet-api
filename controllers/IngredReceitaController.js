const { knex } = require("../database");

//get = ler tabela ingred_receitas
exports.get = async (req, res, next) => {
  try {
    const result = await
      knex.select('*').from('ingred_receitas')
    res.json(result);

  } catch (err) {
    console.log(err);
    res.send('Erro ao buscar ingredientes da receita');
  }
};

// get by id
// async = é uma função assíncrona 
exports.getById = async (req, res, next) => {
  const cod_ingred_receita = req.body.cod_ingred_receita;
  try {
    const result = await
      knex.select('*').from('ingred_receitas').where('cod_ingred_receita', cod_ingred_receita)
    res.json(result);

  } catch (err) {
    console.log(err);
    res.send(`Erro ao buscar ingred_receitas - ${cod_ingred_receita} `);
  }
};

exports.post = async (req, res, next) => {
  let ingred_receitas = req.body;

  ingred_receitas.ingredientes.map(item => {
    knex.transaction(function (trx) {
      knex('ingred_receitas')
        .transacting(trx)
        .insert({
          cod_receita: ingred_receitas.cod_receita,
          quantidade: item.quantidade,
          cod_un_medida: item.cod_un_medida,
          cod_ingrediente: item.cod_ingrediente
        })
        .then(trx.commit)
        .catch(trx.rollback);
    })
      .then(function (result) {
        res.send(result)
        next()
      })
      .catch(function (err) {
        console.log(err);
        res.send('Erro ao tentar inserir novo ingrediente na receita');
      })
  })


};
// put = alterar ingred_receitas
exports.put = async (req, res, next) => {
  let ingred_receitas = req.body;
  let cod_ingred_receita = req.params.id

  knex.transaction(function (trx) {
    knex('ingred_receitas')
      .transacting(trx)
      .where('cod_ingred_receita', cod_ingred_receita)
      .update(ingred_receitas)
      .then(trx.commit)
      .catch(trx.rollback);
  })
    .then(function (result) {
      res.sendStatus(200)
    })
    .catch(function (err) {
      console.log(err);
      res.send('Erro ao tentar alterar ingrediente da receita');
    })
};
exports.delete = async (req, res, next) => {
  let cod_ingred_receita = req.params.id;
  try {
    const result = await
      knex('ingred_receitas')
        .where('cod_ingred_receita', cod_ingred_receita)
        .del();

    res.json(result);

  } catch (err) {
    console.log(err);
    res.send('Erro ao tentar deletar ingrediente da receita');
  }
};