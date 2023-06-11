const IngredReceitaController = require('../controllers/IngredientesController');

module.exports = (app) => {

    app.get('/ingred_receitas', IngredReceitaController.get);
    app.get('/ingred_receitas/:id', IngredReceitaController.getById);
    app.post('/ingred_receitas', IngredReceitaController.post);
    app.put('/ingred_receitas/:id', IngredReceitaController.put);
    app.delete('/ingred_receitas/:id', IngredReceitaController.delete);

}