/* Load Post Data Access Object */
const PostDao = require('../dao/postDao');

/* Load Controller Common function */
const controllerCommon = require('./common/controllerCommon');

/* Load Driver entity */
const Post = require('../model/post');

/**
 * Post Controller
 */
class PostController {

    constructor() {
        this.postDao = new PostDao();
        this.common = new controllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    findById(req, res) {
        let id = req.params.id;
        this.postDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
        this.postDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities related with an id.
     * @return all entities
     */
    findPostsByAuthor(req, res) {
        let author_id = req.params.id;
        this.postDao.findPostsByAuthor(author_id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    findPostByTitle(req, res) {
        let title = req.params.title;
        this.postDao.findPostByTitle(title)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

    getPostPagination(req, res) {
        const page = req.params.page;
        const size = req.params.size;

        this.postDao.getPostPagination(page, size)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll(res) {
        this.postDao.countAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Updates the given entity in the database
     * @params req, res
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(req, res) {
        let post = new Post();
        post.id = req.body.id;
        post.title = req.body.title;
        post.description = req.body.description;
        post.date = req.body.date;

        return this.postDao.update(post)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Creates the given entity in the database
     * @params req, res
     * returns database insertion status
     */
    create(req, res) {
        let post = new Post();
        if (req.body.id) {
            post.id = req.body.id;
        }
        post.title = req.body.title;
        post.description = req.body.description;
        post.date = req.body.date;
        post.auth_id = req.body.auth_id;

        if (req.body.id) {
            return this.postDao.createWithId(post)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        }
        else {
            return this.postDao.create(post)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        }
    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params req, res
     * returns database deletion status
     */
    deleteById(req, res) {
        let id = req.params.id;

        this.postDao.deleteById(id)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params req, res
     * @return
     */
    exists(req, res) {
        let id = req.params.id;

        this.postDao.exists(id)
            .then(this.common.existsSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = PostController;