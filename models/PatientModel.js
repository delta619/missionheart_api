const mongoose = require("mongoose");



const reachOut = new mongoose.Schema({
    name:String,
    patientName: String,
    phoneNo: String,
    email: String,
    message: String,
});


const ReachModel = mongoose.model('Patients',reachOut)

module.exports = ReachModel;