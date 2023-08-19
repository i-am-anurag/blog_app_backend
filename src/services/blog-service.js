const cloudinary = require('../config/cloudinary-config');
const fs = require('fs').promises;
const path = require('path');
const {BlogRepository} = require('../repository/index');

class BlogService {
    constructor() {
        this.blogRepository = new BlogRepository();
    }

    async uploadAndProcessMedia(files,urls = []) {
        try {
            const mediaArray = [];
            for (const file of files) {
                const tempFilePath = path.join(__dirname, 'temp', file.originalname);
                await fs.writeFile(tempFilePath,file.buffer);

                const result = await cloudinary.uploader.upload(tempFilePath, {
                folder: 'blog-media'
                });
            
                mediaArray.push({
                type: file.mimetype.includes('image') ? 'image' : 'video',
                url: result.secure_url
                });
            }

            if (urls.length > 0) {
                const urlArray = urls.split(',');
                for (const url of urlArray) {
                    mediaArray.push({
                        type: 'url',
                        url: url
                    });
                }
            }

            return mediaArray;
        } catch (error) {
            console.log("uploading media file failed with error: " + error.message);
            throw new Error('Error in uploading media files');
        }
    }

    async createBlog({title,description,files,urls,userId}) {
        try {
            console.log("Inside Create Blog Service");
            const mediaArray = await this.uploadAndProcessMedia(files,urls);
            console.log(mediaArray);
            const blog = await this.blogRepository.create({title, description,media:mediaArray,userId});

            return blog;   
        } catch (error) {
            console.log("Error in creating blog",error);
            throw new Error('Error in creating a blog');
        }
    }

    async getAllBlog() {
        try {
            const blogs = await this.blogRepository.getAll();

            return blogs;
        } catch (error) {
            throw new Error('Error in getting all blog with error:',error);
        }
    }

    async deleteBlog(blogId) {
        try {
            const blog = await this.blogRepository.destroy(blogId);

            return blog;
        } catch (error) {
            throw new Error('Error in deleting blog',error);
        }
    }

    async updateBlog(blogId,content) {
        try {
            const blog = await this.blogRepository.update(blogId,content);

            return blog;
        } catch (error) {
            throw new Error('Error in updating blog',error);
        }
    }

}


module.exports = BlogService;