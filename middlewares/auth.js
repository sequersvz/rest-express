const jwt = require("jsonwebtoken")

module.exports = (req,res,next) => {
    if(req.body) {
        const header = req.headers["authorization"]
        const token = header && header.split(" ")[1]
        
        if(token === null) return res.status(400).send({error: "token is necessary"})
        jwt.verify(token, process.env.JWT_TOKEN, (error, user) => {
            if(error) return res.sendStatus(403)
            
            req.user = user
            next()
        })
    }
}