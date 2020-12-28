const mongoose = require('mongoose');
const CommentArtSchema = require('./Schema/CommentArt');

const Comment = mongoose.model('commentArt', CommentArtSchema);

module.exports = Comment;