const mongoose = require("mongoose");



const reachOut = new mongoose.Schema({
    name:String,
    phoneNo: String,
    message: String,
});


const ReachModel = mongoose.model('ReachOut',reachOut)

module.exports = ReachModel;