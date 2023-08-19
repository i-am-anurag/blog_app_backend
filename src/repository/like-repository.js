const Like = require('../models/Like');
const CrudRepository = require('./crud-repository');

class LikeRepository extends CrudRepository {
    constructor() {
        super(Like);
    }
};

module.exports = LikeRepository;