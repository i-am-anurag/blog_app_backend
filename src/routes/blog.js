const express = require('express');
const {isAdmin} = require('../middleware/blog-middleware');
const {createBlog,updateBlog,deleteBlog,getAllBlogs} = require('../controller/blog-controller');
const upload = require('../middleware/file-uploader-middleware');
const {toggleLike} = require('../controller/like-controller');
const {createComment} = require('../controller/comment-controller');

const router = express.Router();

router.post('/createblog',isAdmin,upload.array('media'),createBlog);
router.patch('/updateblog/:id',isAdmin,updateBlog);
router.delete('/deleteblog/:id',isAdmin,deleteBlog);
router.get('/',getAllBlogs);
router.post('/likes/toggle',toggleLike);
router.post('/comment',createComment);

module.exports = router;