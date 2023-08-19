const LikeService = require('../services/like-service');
const likeService = new LikeService();

const toggleLike = async(req,res) => {
    try {
        const {modelId,modelType} = {...req.query};
        const userId = req.user.id;
        const response = await likeService.toggleLike(modelId, modelType, userId);
        const message = (response)?"Successfully like a blog":"Successfully unlike a blog"
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Error in toggle like',
            data: {},
            err: error
        })
    }
};

module.exports = {
    toggleLike,
}