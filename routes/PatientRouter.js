const express = require('express');
const router = express.Router();
const PatientController = require('../controllers/PatientController')

router
.route('/')
.post(PatientController.addPatient)

module.exports = router