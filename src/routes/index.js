const express = require('express');
const userroutes = require('./user');
const blogroutes = require('./blog');
const {requestvalidator} = require('../middleware/auth-middleware');
const router = express.Router();

router.use('/auth',userroutes);
router.use('/blogs',requestvalidator,blogroutes);

module.exports = router;