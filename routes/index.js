const AuthRoute = require("./AuthRoute")
const CategoriaRoute = require("./CategoriaRoute")
const IngredientesRoute = require("./IngredientesRoute")
const ReceitaRoute = require("./ReceitaRoute")
const UsuarioRoute = require("./UsuarioRoute")
const IngredReceitaRoute = require("./IngredReceitaRoute")
const UnMedidaRoute = require("./UnMedidaRoute")

module.exports = (app) => {
    IngredientesRoute(app),
        CategoriaRoute(app),
        ReceitaRoute(app),
        UsuarioRoute(app),
        AuthRoute(app),
        IngredReceitaRoute(app),
        UnMedidaRoute(app)
}

