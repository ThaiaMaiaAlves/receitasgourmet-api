const UsuarioController = require('../controllers/UsuarioController');

module.exports = (app) => {
    app.get('/usuarios', UsuarioController.get);
    app.get('/usuarios/email', UsuarioController.getByEmail);
    app.get('/usuarios/:id', UsuarioController.getById);
    app.post('/usuarios', UsuarioController.post);
    app.put('/usuarios/:id', UsuarioController.put);
    app.delete('/usuarios/:id', UsuarioController.delete);

}