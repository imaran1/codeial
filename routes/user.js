const express = require('express');
const router = express.Router();

const usersController = require('../controllers/user_Controller');

router.get('/profile', usersController.profile);

module.exports = router;