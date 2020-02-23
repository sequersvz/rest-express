require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const router = require("express").Router();
const app = express()

app.disable("x-powered-by");

app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(bodyParser.json())
  
  
  app.set('port', process.env.PORT || 8000)
  
  require("./db")
  require("./routes")(app, router);
app.use(router)



app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});