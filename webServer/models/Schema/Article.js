const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: String,
    description: String,
    tag : [String],
    img: String,
});

module.exports = ArticleSchema;