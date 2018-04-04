/**
 * Express Router configuration
 */
const express = require('express');
const router = express.Router();

/* API routes */
router.use('/author', require('./api/authorRoutes'));
router.use('/post', require('./api/postRoutes'));

module.exports = router;