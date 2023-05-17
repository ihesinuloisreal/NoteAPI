const Note = require("../Models/Create_Note")
const createNote = async (noteData) => {
    try {
        const note = new Note(noteData);
        await note.save();
        return note;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to create user')
    }
};
const getNote = async () => {
    try {
        const notes = await Note.find();
        console.log(notes);
        return notes;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to get notes')
    }
};
const deleteNote = async (req, res) => {
    const id = req.body.id;
    try {
        const notes = await Note.findByIdAndDelete(id);
        if (notes) {
            console.log("note deleted");
        } else {
            console.log("Issue deleting")
        }
        return notes;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to get notes')
    }
};
module.exports = {
    createNote,
    getNote,
    deleteNote,
};