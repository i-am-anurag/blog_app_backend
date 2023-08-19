const {CommentRepository,BlogRepository} = require('../repository/index');

class CommentService {
    constructor() {
        this.blogRepository = new BlogRepository();
        this.commentRepository = new CommentRepository();
    }
    async createComment(blogId,modelType,userId,content) {
        try {
            console.log(blogId,modelType,userId,content);
                if(modelType == 'Blog') {
                    var commentable = await this.blogRepository.findBy({_id: blogId});
                    console.log("The Value of commentable is: " + commentable);
                } else {
                    throw new Error('Invalid model type');
                }
        
                const comment = await this.commentRepository.create({
                    content:content,
                    userId:userId,
                    commentable:blogId,
                });
        
                commentable.comments.push(comment);
                comment.save();
        
                return comment;   
        } catch (error) {
            console.log("Error in creating comment");
            throw new Error(error.message);   
        }
    }
}

module.exports = CommentService;