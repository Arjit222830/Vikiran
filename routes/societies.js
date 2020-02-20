const express= require('express');
const router= express.Router();
const {Society, validate}= require('../models/society');

router.post('/',async (req,res)=>{
    const {error}= validate(req.body);//result.error(joi package)
    if(error)
        return res.status(400).send(error.details[0].message);
    
    const society= new Society({
        Society_Name: req.body.society,
		Event_Name: req.body.event,
        Co_ordinator1: req.body.c1,
        Co_ordinator2: req.body.c2,
        Rules: req.body.rules,
        Venue: req.body.venue,
        Competition_Type: req.body.type,
        Event_Date: req.body.date,
        Event_Time: req.body.time
    });
    
    await society.save();

    res.send({message:'Society Registeration Successful',link:'/'});
});

module.exports= router;