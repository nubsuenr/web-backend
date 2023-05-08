const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const announcementSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
}, {timestamps: true});

const Announcement = mongoose.model('Announcemtnt', announcementSchema);
module.exports = Announcement;