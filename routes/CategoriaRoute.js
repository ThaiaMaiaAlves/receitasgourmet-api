const CategoriaController = require('../controllers/CategoriaController');

module.exports = (app) => {
    app.get('/categorias', CategoriaController.get);
    app.get('/categorias/:id', CategoriaController.getById);
    app.post('/categorias', CategoriaController.post);
    app.put('/categorias/:id', CategoriaController.put);
    app.delete('/categorias/:id', CategoriaController.delete);

}
