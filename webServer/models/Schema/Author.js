const mongoose = require('mongoose');
const ArticleSchema = require('./Article');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: String,
    article : [ArticleSchema]
})

module.exports = AuthorSchema;