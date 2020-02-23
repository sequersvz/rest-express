const Db = require("../")

module.exports =  Db.createModel("user", {
        username: String,
        password: String,
        createdDate: Date,
        refreshToken: String
    })
