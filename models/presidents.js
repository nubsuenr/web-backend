const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const presidentSchema = new Schema({
    name: {
        type: String,
        required:true,
    },
    yearofadministration: {
        type: String,
        required: true,
    },
}, {timestamps: true});

const President = mongoose.model('President', presidentSchema);
module.exports = President;