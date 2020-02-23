module.exports = (app, router) => {
    app.use((req, res, next) => {
        // Website you wish to allow to connect
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:8000/");

        // Request methods you wish to allow
        res.setHeader(
          "Access-Control-Allow-Methods",
          "GET, POST, OPTIONS, PUT, PATCH, DELETE"
        );
        // Request headers you wish to allow
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept, X-Amz-Security-Token, x-amz-date, Authorization, count"
        );
        res.header("Access-Control-Expose-Headers", "count");
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader("Access-Control-Allow-Credentials", false);

        res.setHeader("Content-Type", "application/json")
    
        //set req.cognitoIdentityId to have it at hand
        next();
      });

    const notesRoute = require("./API/notes")(router)
    const authRoute = require("./API/auth")(router)

    app.use(notesRoute)
    app.use(authRoute)
}