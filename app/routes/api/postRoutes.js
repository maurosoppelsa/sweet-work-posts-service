/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const PostController = require('../../controller/postController');
const postController = new PostController();

/**
 * Post Entity routes
 */
router.get('/count', function (req, res) {  
    postController.countAll(res);
});

router.get('/exists/:id', function (req, res) {
    postController.exists(req, res);
});

router.get('/:id', function (req, res) {
    postController.findById(req, res)
});

router.get('/', function (req, res) {
    postController.findAll(res);
});

router.get('/author/:id', function (req, res) {
    postController.findPostsByAuthor(req, res);
});

router.get('/title/:title', function (req, res) {
    postController.findPostByTitle(req, res);
});

router.get('/page/:page/:size', function (req, res) {
    postController.getPostPagination(req, res);
});

router.put('/:id', function (req, res) {
    postController.update(req, res)
});

router.post('/create', function (req, res) {
    postController.create(req, res);
});

router.delete('/:id', function (req, res) {
    postController.deleteById(req, res)
});

module.exports = router;