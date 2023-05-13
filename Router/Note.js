const express = require("express");
const router = express.Router();
const controller = require("../Controller/NoteController")


router.get('/note', async (req, res) => {
    try {
        const note = await controller.getNote();
        res.json(note);
        console.log(note)
    } catch (err) {
        console.error('failed: ', err);
    } 
    // console.log("Hello")
})
router.get('/send', async (req, res) => {
    const noteData = {
        title: "Welcome world",
        text: "Here is an introdunction to Note keeping",
        color: "#fff"
    };
    try {
        controller.createNote(noteData)
        if () == true {
            console.log('successful')
        }
    } catch (err) {
        console.error('Failed',err)
    }
})
module.exports = router;