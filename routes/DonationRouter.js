const express = require('express');
const router = express.Router();
const DonationsController = require('../controllers/DonationsController')

router
.route('/')
.post(DonationsController.addDonation)

module.exports = router