const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    commentable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Blog'
    },
}, {timestamps: true});

const Comment = mongoose.model('Comment', commentSchema);

module.exports= Comment;