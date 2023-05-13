const express = require("express");
const router = express.Router();
const controller = require("../Controller/NoteController")


router.get('/note', async (req, res) => {
    try {
        const note = await controller.getNote();
        res.json(note);
    } catch (err) {
        console.error('failed: ', err);
    } 
    // console.log("Hello")
})
router.get('/send', async (req, res) => {
    const noteData = req.body;
    try {
        const note = controller.createNote(noteData)
        res.json(note);
    } catch (err) {
        console.error('Failed',err)
    }
})
module.exports = router;