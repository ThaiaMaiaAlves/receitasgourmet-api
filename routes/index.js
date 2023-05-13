const AuthRoute = require("./AuthRoute")
const UsuarioRoute = require("./UsuarioRoute")

module.exports = (app) => {
    UsuarioRoute(app),
        AuthRoute(app)
}