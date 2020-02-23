const Db = require("../")

module.exports =  Db.createModel("notes", {
        date: Date,
        title: String,
        description: String,
        createdBy: String
    })
