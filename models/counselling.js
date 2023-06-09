const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const counsellingSchema = new Schema({
    fullname: {
        type: String,
    },
    worringmessage: {
        type: String,
    },
    viewed : {
        type:String,
    }
}, {timestamps: true});

const Counselling = mongoose.model('Counselling', counsellingSchema);
module.exports = Counselling;