const CategoriaController = require('../controllers/CategoriaController');

module.exports = (app) => {

    app.get('/categoria', CategoriaController.get);
    app.get('/categoria/:id', CategoriaController.getById);
    app.post('/categoria', CategoriaController.post);
    app.put('/categoria/:id', CategoriaController.put);
    app.delete('/categoria/:id', CategoriaController.delete);

}