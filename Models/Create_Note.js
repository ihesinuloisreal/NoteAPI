const mongoose = require("mongoose")
const { Schema } = mongoose;
const NoteSchema = new Schema({
    title: {type: String, required: true,},
    text: {type: String, required: true,},
    color: {type: String, required: true,},
    createdAt: {type: Date, default: Date.now,},
});

const Note = mongoose.model('notes', NoteSchema);
module.exports = Note;