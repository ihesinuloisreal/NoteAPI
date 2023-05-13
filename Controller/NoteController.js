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
        return console.log(notes);
    } catch (err) {
        console.error(err);
        throw new Error('Failed to get notes')
    }
};
module.exports = {
    createNote,
    getNote,
};