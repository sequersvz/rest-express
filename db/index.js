const mongoose = require('mongoose');

mongoose.Promise = global.Promise

class DBConfig {
    constructor(){
        this._connect()
    }

    _connect() {
        mongoose.connect(
            process.env.DB_HOST
            , {
              useNewUrlParser: true,
              useCreateIndex: true,
              useUnifiedTopology: true
            })
    }


    createModel(name, objectSchema){
        return mongoose.model(name, new mongoose.Schema(objectSchema))
    }
}

module.exports = new DBConfig()