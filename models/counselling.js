const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const counsellingSchema = new Schema({
    name: {
        type: String,
    },
    message: {
        type: String,
        required: true,
    },
}, {timestamps: true});

const Counselling = mongoose.model('Counselling', counsellingSchema);
module.exports = Counselling;