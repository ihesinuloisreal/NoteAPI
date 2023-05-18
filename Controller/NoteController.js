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
        if (notes) {
            return notes;
        }
        // console.log(notes);
    } catch (err) {
        console.error(err);
        throw new Error('Failed to get notes')
    }
};
const deleteNote = async (req, res) => {
    const id = req.params.id;
    try {
        const notes = await Note.findByIdAndDelete(id);
        if (notes){
            console.log("note deleted");
        } else {
            console.log(id);
        }
        return notes;
        // console.log(id)

    } catch (err) {
        console.error(err);
        throw new Error('Failed to get notes');
    }
};
module.exports = {
    createNote,
    getNote,
    deleteNote,
};