
const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_Controller');

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);
router.get('/profile', usersController.profile);
router.post('/create', usersController.create);
router.get('/post', usersController.post);

module.exports = router;