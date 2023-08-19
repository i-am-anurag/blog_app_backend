const BlogService = require('../services/blog-service');
const blogService = new BlogService();

const createBlog = async(req, res) => {
    try {
        const {title, description, urls = []} = {...req.body};
        const files = req.files;
        const userId = req.user.id;
        if (!title || !description) {
            throw new Error('Missing required parameters for blog creation');
        }
        const blog = await blogService.createBlog({title, description,files,urls,userId});

        return res.status(200).json({
            success: true,
            message: 'Blog created successfully',
            data: blog,
            error: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: true,
            message: 'Error in blog creation',
            data: {},
            error: error.message,
        });
    }
}

const getAllBlogs = async(req, res) => {
    try {
        const blogs = await blogService.getAllBlog();
        
        return res.status(200).json({
            success:true ,
            message:'Blogs fetched Successfully' ,
            data :blogs,
            error:{},
        })
    } catch (error) {
        console.log("error",error);
        return res.status(401).json({
            success:false,
            message:"Something went wrong while fetching the Blogs" ,
            data:{} ,
            error:error.message,
        })
    }
}


const updateBlog = async(req, res) => {
    try {
        const blogId = req.params.id;
        const blogData = {...req.body};
        const response = await blogService.updateBlog(blogId, blogData);

        return res.status(201).json({
            success: true,
            message:'Updated Successfully!',
            data: response,
            error:{},
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message:"Error in blog updation",
            data:{} ,
            error:error.message,
        })
    }
}

const deleteBlog = async(req, res) => {
    try {
        const blogId = req.params.id;
        const response = await blogService.deleteBlog(blogId);

        return res.status(200).json({
            success:true,
            message:'Blog Deleted Successfully!',
            data:response,
            error:{},
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error in blog deletion",
            data:{},
            error:error.message
        });
    }
}

module.exports = {
    createBlog,
    getAllBlogs,
    updateBlog,
    deleteBlog,
}