const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    likeable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Blog'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;