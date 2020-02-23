const Note = require("../../db/models/notes")

module.exports = (req,res) => {
    if(req.body) {
        Note.findOneAndUpdate({_id: req.body.id, createdBy: req.user.id}, {
            date: new Date(),
            title: req.body.title,
            description: req.body.description
        }, {projection: "-createdBy", useFindAndModify: false})
        .then((note) => res.status(200).send({status: "update successfully", edited: true}))
        .catch((error) => res.status(400).send({status: "error updating note", error: error}))
    }
}