const UnMedidaController = require('../controllers/UnMedidaController');

module.exports = (app) => {

    app.get('/un_medida', UnMedidaController.get);
    app.get('/un_medida/:id', UnMedidaController.getById);
    app.post('/un_medida', UnMedidaController.post);
    app.put('/un_medida/:id', UnMedidaController.put);
    app.delete('/un_medida/:id', UnMedidaController.delete);

}