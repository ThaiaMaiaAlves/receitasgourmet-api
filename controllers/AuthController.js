// instalação de 2 extensões para a autenticação
// bcrypt jsonwebtoken
// O bcrypt compara o senha e o jsonwebtoken é para criar um token de autenticação
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { knex } = require('../database');

const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuarios = await
      knex('usuarios')        
        .where('email', 'like', email);

    const usuario = usuarios[0]

    if (!usuario) {
      return res
        .status(401)
        .json({
          statusCode: 401,
          message: 'Usuário não encontrado!',
          data: {
            email: email
          }
        });
    }

    const validaSenha = bcrypt.compareSync(senha, usuario.senha);

    if (!validaSenha) {
      return res
        .status(401)
        .json({
          statusCode: 401,
          message: 'Não autorizado!'
        });
    }

    const token = jwt.sign({ name: usuario.nome }, 'ReceitasGourmetValid');

    return res
      .status(200)
      .json({
        statusCode: 200,
        message: 'Login realizado com sucesso!',
        data: {
          token
        }
      })

  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({
        statusCode: 500,
        message: err.message
      });
  }
};

const verifyToken = (req, res, next) => {

  const tokenHeader = req.headers['authorization'];
  const token = tokenHeader && tokenHeader.slipt(' ')[1];

  if (!token) {
    return res
      .status(403)
      .json({
        statusCode: 403,
        message: 'Não autorizado!'
      });
  }

  try {

    jwt.verify(token, 'ReceitasGourmetValid');
    next();

  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({
        statusCode: 500,
        message: 'Token inválido!'
      });
  }

};

module.exports = {
  login,
  verifyToken
}
