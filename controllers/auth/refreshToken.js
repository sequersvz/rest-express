const User = require("../../db/models/user")
const jwt = require("jsonwebtoken")

module.exports = (req,res) => {
    if(req.body) {
        const { token } = req.body

        if(token === null) return res.sendStatus(401)


        jwt.verify(token, process.env.JWT_REFRESH_TOKEN, (jwtError, jwtUser) => {
            if(jwtError) return res.sendStatus(400)
            console.log(jwtUser.id)

            User.findById({_id: jwtUser.id}).then((user) => {
                const accessToken = jwt.sign({id: user._id}, process.env.JWT_TOKEN, {expiresIn: 3600})
                console.log("weee")
                return res.status(200).send({accessToken})
            })
        })
    }
}