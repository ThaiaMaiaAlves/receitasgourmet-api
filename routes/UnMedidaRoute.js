const ReceitaController = require('../controllers/ReceitaController');

module.exports = (app) => {

    app.get('/receita', ReceitaController.get);
    app.get('/receita/:id', ReceitaController.getById);
    app.post('/receita', ReceitaController.post);
    app.put('/receita/:id', ReceitaController.put);
    app.delete('/receita/:id', ReceitaController.delete);

}