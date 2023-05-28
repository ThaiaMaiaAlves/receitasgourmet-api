const IngredientesController = require('../controllers/IngredientesController');

module.exports = (app) => {

    app.get('/ingredientes', IngredientesController.get);
    app.get('/ingredientes/:id', IngredientesController.getById);
    app.post('/ingredientes', IngredientesController.post);
    app.put('/ingredientes/:id', IngredientesController.put);
    app.delete('/ingredientes/:id', IngredientesController.delete);

}