const bcrypt = require('bcryptjs');
const User = require("../../db/models/user")
const jwt = require("jsonwebtoken")

module.exports = (req,res) => {
    if(req.body) {
        const { password, username } = req.body
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);


        User.findOne({username: username}).then( user => {
            if(Boolean(user)) {
                return res.status(400).send({error: "username already exist"})
            }
            return new User({
                username: username,
                password: hash,
                createdDate: new Date()
            }).save((error, note) => (error ? res.status(400).send({status: "request error, try later"}) 
            : res.status(201).send({status: "user created"})))
        }).catch(error => res.status(400).send({error: error}))
    }
}