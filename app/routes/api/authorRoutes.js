/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const AuthorController = require('../../controller/authorController');
const authorController = new AuthorController();

/**
 * Author Entity routes
 */
router.get('/count', function (req, res) {
    authorController.countAll(res);
});

router.get('/exists/:id', function (req, res) {
    authorController.exists(req, res);
});

router.get('/:id', function (req, res) {
    authorController.findById(req, res);
});

router.get('/', function (req, res) {
    authorController.findAll(res);
});

router.put('/:id', function (req, res) {
    authorController.update(req, res);
});

router.post('/create', function (req, res) {
    authorController.create(req, res);
});

router.delete('/:id', function (req, res) {
    authorController.deleteById(req, res);
});

module.exports = router;