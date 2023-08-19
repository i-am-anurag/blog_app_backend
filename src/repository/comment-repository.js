const Comment = require('../models/comment');
const CrudRepository = require('./crud-repository');

class CommitRepository extends CrudRepository {
    constructor() {
        super(Comment);
    }
};

module.exports = CommitRepository;