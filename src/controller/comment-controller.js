const CommentService = require('../services/comment-service');

const commentService = new CommentService();

const createComment = async(req, res) => {
    try {
        const {modelId, modelType,content} = {...req.query,...req.body};
        const userId = req.user.id;
        const response = await commentService.createComment(modelId,modelType,userId,content);

        return res.status(201).json({
            success: true,
            message:'Comment created successfully',
            data:response,
            error:{},
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message:'Error in comment creation',
            data:{},
            error:error.message,
        });
    }
}

module.exports = {
    createComment,
}