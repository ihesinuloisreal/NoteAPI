const express = require("express");
const router = express.Router();
const controller = require("../Controller/NoteController")


router.get('/', async (req, res) => {
    try {
        const noteData = {
            title: "Welcome world",
            text: "Here is an introdunction to Note keeping",
            color: "#fff"
        };
        const note = await controller.createNote(noteData);
        res.json(note);
    } catch (err) {
        console.error
    }
    
    
})
router.post('/post', controller.createNote(noteData)
    .then((note) => {

    })
    .catch((err) => [
        
    ]))

module.exports = router;