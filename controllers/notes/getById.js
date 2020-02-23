const Note = require("../../db/models/notes")

module.exports = (req,res) => {
    if(req.params.id) {
        Note.findOne({_id: req.params.id, createdBy: req.user.id}, "-createdBy -__v")
        .then(note => {
            if(note === null) {
                return res.status(404).send({status: "note not found"})
            }

            return res.status(200).send({status: "take your note", note: note})
        })
        .catch((error) => res.status(400).send({status: "error fetching note", error: error}))
    }
}