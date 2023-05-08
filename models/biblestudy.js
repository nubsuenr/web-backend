const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const biblestudiesSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    snippet: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
}, {timestamps: true});

const Biblestudy = mongoose.model('Biblestudy', biblestudiesSchema);
module.exports = Biblestudy;