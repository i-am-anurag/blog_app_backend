const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type : String,
        required:[true,'Please add a Title']
    },
    description:{
        type:String ,
        maxlength:[1024,"Description should be less than 50 characters"],
        minlength:[3 ,"Title must have atleast three character"],
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    media:[
        {
            type: {
                type: String,
                enum: ['image', 'gif', 'video', 'url'],
            },
            url: String,
        },
    ]
});

const Blog = mongoose.model('Blog', blogSchema,'Blog');

module.exports = Blog;