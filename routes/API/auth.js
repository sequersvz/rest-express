const _signupController = require("../../controllers/auth/signup")
const _loginController = require("../../controllers/auth/login")
const _logoutController = require("../../controllers/auth/logout")
const _refreshTokenController = require("../../controllers/auth/refreshToken")

module.exports = (router) => {
    router.post("/api/auth/login", _loginController)
    router.post("/api/auth/signup", _signupController)
    router.post("/api/auth/logout", _logoutController)
    router.post("/api/auth/tokenRS", _refreshTokenController)
    return router
}