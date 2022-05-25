const mongoose = require("mongoose");



const donateSchema = new mongoose.Schema({
    name:String,
    phoneNo: String,
    email: String,
    message: String,
});


const DonateModel = mongoose.model('Donations',donateSchema)

module.exports = DonateModel;