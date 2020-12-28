const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentArtSchema = new Schema({
    articleUuid : String,
    comment : String,
    authorUuid : String,
});

module.exports = CommentArtSchema;