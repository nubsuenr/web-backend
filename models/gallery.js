const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gallerySchema = new Schema({
    image_id: {
        type: String,
        required: true,
    },
}, {timestamps: true});

const Gallery = mongoose.model('Gallery', gallerySchema);
module.exports = Gallery;