const Reach = require('../models/ReachModel');


exports.addReach = async (req, res)=>{

    try{
        let reach_doc = {...req.body}
        
        await Reach.create(reach_doc)
        
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