const {LikeRepository,BlogRepository} = require('../repository/index');

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.blogRepository = new BlogRepository();
    }

    async toggleLike(blogId, modelType, userId) {
        if(modelType == 'Blog') {
            var likeable = await this.blogRepository.findBy({_id:blogId});
        } else {
            throw new Error('Invalid model type');
        }
        const exists = await this.likeRepository.findBy({
            user: userId,
            likeable: blogId,
        });
        console.log("exists", exists);
        if(exists) {
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.remove();

            var isAdded = false;

        } else {
            const newLike = await this.likeRepository.create({
                user: userId,
                likeable: blogId
            });
            likeable.likes.push(newLike);
            await likeable.save();

            var isAdded = true;
        }
        return isAdded;
    }   
}

module.exports = LikeService;