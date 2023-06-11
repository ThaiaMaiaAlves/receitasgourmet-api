const ReceitaController = require('../controllers/ReceitaController');

module.exports = (app) => {

    app.get('/receitas', ReceitaController.get);
    app.get('/receitas/:id', ReceitaController.getById);
    app.post('/receitas', ReceitaController.post);
    app.put('/receitas/:id', ReceitaController.put);
    app.delete('/receitas/:id', ReceitaController.delete);

}