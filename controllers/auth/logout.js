const User = require("../../db/models/user")
const jwt = require("jsonwebtoken")

module.exports = (req,res) => {
    if(req.body) {

        const { token } = req.body

        jwt.verify(token, process.env.JWT_TOKEN, (jwtError, jwtUser) => {
            User.findById({_id: jwtUser.id}, (error, user) => {
                user.refreshToken = undefined
                user.save()

                return res.sendStatus(200)
            })
        })
    }
}