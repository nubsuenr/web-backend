const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const counsellingSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    portfolio: {
        type: String,
        required: true,
    },
    year: {
        type:String,
        required: true,
    }
}, {timestamps: true});

const Counselling = mongoose.model('Counselling', counsellingSchema);
module.exports = Counselling;