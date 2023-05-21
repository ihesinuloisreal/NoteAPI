const express = require("express");
const router = express.Router();
const controller = require("../Controller/NoteController")


router.get('/note', async (req, res) => {
    try {
        const note = await controller.getNote();
        res.send(note);
    } catch (err) {
        console.error('failed: ', err);
    } 
    // console.log("Hello")
})
router.post('/send', async (req, res) => {
    const noteData = req.body;
    try {
        const note = controller.createNote(noteData)
        res.json(note);
    } catch (err) {
        console.error('Failed',err)
    }
})
router.put('/update/:id', async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body
    try {
        const note = await controller.updateNote(updatedData, id);
        res.send(note);
    } catch (error) {
        console.error
    }
})
router.get('/find/:id', async (req, res) => {
    const id = req.body.id;
    try {
        const record = await controller.findRecord(id)
        if (!id) {
            console.log("No Record found")
        }
        res.send(record)
    } catch (err) {
        console.error('Failed fetching data',err)
    }
})
router.delete('/delete/:id', controller.deleteNote)
module.exports = router;