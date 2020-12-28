const mongoose = require('mongoose');

const TagSchema = mongoose.Schema({
    name: String,
})

module.exports = TagSchema;