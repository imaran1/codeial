const express = require('express')
const router = express.Router();
//import controller
const homeController = require('../controllers/home_Controller');

//use controller
router.get('/', homeController.home);
router.use('/user', require('./user'))
router.use('/user', require('./posts'))
console.log(' router is loaded');

module.exports = router;