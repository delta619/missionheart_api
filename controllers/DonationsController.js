const Donation = require('../models/DonateModel');


exports.addDonation = async (req, res)=>{

    try{
        let Donation_doc = {...req.body}
        
        await Donation.create(Donation_doc)
        
        return res.json({
            status: 200,
            message: 'success',
        });
    }
    catch(err){
        res.json({
            status: 500,
            message: 'failed'
        })
    }


}