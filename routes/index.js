const AuthRoute = require("./AuthRoute")
const CategoriaRoute = require("./CategoriaRoute")
const IngredientesRoute = require("./IngredientesRoute")
const ReceitaRoute = require("./ReceitaRoute")
const UsuarioRoute = require("./UsuarioRoute")

module.exports = (app) => {
    IngredientesRoute(app),
        CategoriaRoute(app),
        ReceitaRoute(app),
        UsuarioRoute(app),
        AuthRoute(app)
}