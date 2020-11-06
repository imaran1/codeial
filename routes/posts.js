const express = require('express');
const router = express.Router();

const userPosts = require('../controllers/user_Posts');

router.get('/post', userPosts.post);

module.exports = router;