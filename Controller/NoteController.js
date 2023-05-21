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
        if (notes.length === 0) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        // console.log(notes);
        return notes;
    } catch (err) {
        console.error(err);
        throw new Error('Failed to get notes')
    }
};
const updateNote = async (updatedData, id) => {
    try {
        const notes = await Note.findByIdAndUpdate(id, updatedData, {new: true });
        if (!notes) {
            return res.status(400).json({ error: 'Note not Found' });
        }
        // const note = new Note(updatedData);

        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error'});
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
    updateNote,
    deleteNote,
};