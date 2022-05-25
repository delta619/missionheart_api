const express = require('express');
const router = express.Router();
const ReachController = require('../controllers/ReachController')

router
.route('/')
.post(ReachController.addReach)

module.exports = router