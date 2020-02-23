const bcrypt = require('bcryptjs');
const User = require("../../db/models/user")
const jwt = require("jsonwebtoken")

module.exports = (req,res) => {
    if(req.body) {
        User.findOne({username: req.body.username}, (error, user) => {
            if(error) return res.status(400).send({error: "username or password incorrect"})

            if(Boolean(user) && bcrypt.compareSync(req.body.password, user.password)) {
                const accessToken = jwt.sign({id: user._id}, process.env.JWT_TOKEN, {expiresIn: 3600})
                const refreshToken = jwt.sign({id: user._id}, process.env.JWT_REFRESH_TOKEN)

                User.findByIdAndUpdate({_id: user._id}, {refreshToken},{useFindAndModify: false}, (error) => {
                    if(error) return res.sendStatus(400)
                })

                return res.status(200).send({status: "si eres tu perro aaaaahhh kbron", accessToken, refreshToken})
            }
        })
    }
}