const _editNoteController = require("../../controllers/notes/edit")
const _deleteNoteController = require("../../controllers/notes/delete")
const _newNoteController = require("../../controllers/notes/new")
const _fetchNotesController = require("../../controllers/notes/fetch")
const _getByIdNoteController = require("../../controllers/notes/getById")
const _authenticateMiddleware = require("../../middlewares/auth")

module.exports = (router) => {
    router.get("/api/notes", _authenticateMiddleware,_fetchNotesController)
    router.post("/api/notes/new",_authenticateMiddleware, _newNoteController)
    router.put("/api/notes/edit",_authenticateMiddleware, _editNoteController)
    router.get("/api/notes/:id",_authenticateMiddleware, _getByIdNoteController)
    router.delete("/api/notes/delete",_authenticateMiddleware, _deleteNoteController)
    return router
}