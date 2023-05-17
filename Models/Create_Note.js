const mongoose = require("mongoose")
const { Schema } = mongoose;
const NoteSchema = new Schema({
    // id: {type: Number},
    title: {type: String, },
    text: {type: String, },
    color: {type: String, },
    createdAt: {type: Date, default: Date.now,},
});

const Note = mongoose.model('notes', NoteSchema);
module.exports = Note;