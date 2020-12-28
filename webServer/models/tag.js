const mongoose = require('mongoose');
const TagSchema = require('./Schema/Tag');

const Tag = mongoose.model('tag', TagSchema);

module.exports = Tag;