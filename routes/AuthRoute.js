const AuthController = require('../controllers/AuthController');
const UsuarioController = require('../controllers/UsuarioController');

module.exports = (app) => {
    app.post('/login', AuthController.login);
    app.post('/verifyToken', AuthController.login, UsuarioController.authRoute);
}