const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const NoteSchema = new Schema({
    // id: {type: Number, require: true},
    title: {type: String, require: true},
    text:{type: String, require: true},
    color:{type: String, require: true},
    // date:{type: Date, require: true},
    }, 
    {
        timestamps: true,
    }
);

const Note = mongoose.model("Note", NoteSchema);
module.exports = Note;