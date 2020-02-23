const Note = require("../../db/models/notes")

module.exports = (req,res) => {
    if(req.body && req.body.id) {
        Note.findOneAndDelete({_id: req.body.id, createdBy: req.user.id})
        .then((note) => res.status(200).send({status: "note was deleted successfully", noteDeleted: true, noteIdDeleted: note.id}))
        .catch(() => res.sendStatus(400))
    }
}