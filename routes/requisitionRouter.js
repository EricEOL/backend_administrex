const express = require('express');

const router = express.Router();

const requisitionController = require('../controllers/requisitionController');

router.post('/register', requisitionController.register);

module.exports = router;