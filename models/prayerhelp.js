const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prayerhelpSchema = new Schema({
    name: {
        type: String,
    },
    message: {
        type: String,
        required: true,
    },
    viewed: {
        type: String,
    }
}, {timestamps: true});

const Prayerhelp = mongoose.model('Prayerhelp', prayerhelpSchema);
module.exports = Prayerhelp;