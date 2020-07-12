const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    url: {type: String},
    shortURL: {type: Number}
});

module.exports = mongoose.model('URL',urlSchema);