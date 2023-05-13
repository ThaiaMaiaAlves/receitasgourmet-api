const UsuarioController = require('../controllers/UsuarioController');

module.exports = (app) => {
    app.post('/usuario', UsuarioController.post);

}