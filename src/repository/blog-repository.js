const Blog = require('../models/blog');
const CrudRepository = require('./crud-repository');

class BlogRepository extends CrudRepository {
    constructor() {
        super(Blog);
    };
};

module.exports = BlogRepository;