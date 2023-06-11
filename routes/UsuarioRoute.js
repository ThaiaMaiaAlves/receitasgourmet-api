const UsuarioController = require('../controllers/UsuarioController');

module.exports = (app) => {
    app.get('/usuarios', UsuarioController.get);
    app.get('/usuarios', UsuarioController.getByEmail);
    app.post('/usuarios', UsuarioController.post);
    app.put('/usuarios', UsuarioController.put);
    app.delete('/usuarios', UsuarioController.delete);

}