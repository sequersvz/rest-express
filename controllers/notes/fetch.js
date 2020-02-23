const Note = require("../../db/models/notes")

module.exports = (req,res) => {
        Note.find({createdBy: req.user.id}, "-createdBy -__v")
        .then((note) => {
            if(note.length > 0) {
                return res.status(200).send({status: "notes fetched", notes: note})
            }

            return res.status(200).send({status: "user doesnt has notes yet"})
        })
        .catch((v) =>  res.send({error: v}))
}