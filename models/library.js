const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const librarySchema = new Schema({
    book_title: {
        type: String,
        // required: true,
    },
    author_name: {
        type: String,
        // required: true,
    },
    link: {
        type: String,
        // required: true,
    },
}, {timestamps: true});

const Library = mongoose.model('Library', librarySchema);
module.exports = Library;