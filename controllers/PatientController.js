const Patient = require('../models/PatientModel');


exports.addPatient = async (req, res)=>{

    try{
        let donor = {...req.body}
        
        await Patient.create(donor)
        
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