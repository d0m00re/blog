const mongoose = require('mongoose');
const ArticleSchema = require('./Schema/Article');

const Article = mongoose.model('article', ArticleSchema);

module.exports = Article