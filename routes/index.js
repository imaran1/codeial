const express = require('express')
const router = express.Router();
//import controller
const homeController = require('../controllers/home_Controller');

//use controller
router.get('/', homeController.home);
router.use('/users', require('./users'));

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));

console.log('router is loaded');

module.exports = router;