const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const announcementSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
}, {timestamps: true});

const Announcement = mongoose.model('Announcement', announcementSchema);
module.exports = Announcement;