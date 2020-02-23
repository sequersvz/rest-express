const Note = require("../../db/models/notes")

module.exports = (req,res) => {
    if(req.body) {
        new Note({
            date: new Date(),
            title: req.body.title,
            description: req.body.description,
            createdBy: req.user.id
        }).save((error, note) => (error ? res.status(400).send({status: "request error, try later"}) 
        : res.status(201).send({status: "created", 
        newNote: {id: note._id, date: note.date, title: note.title, description: note.description}
    })))
    }
}