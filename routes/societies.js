const express= require('express');
const router= express.Router();
const {Society, validate}= require('../models/society');

router.post('/',async (req,res)=>{
    const {error}= validate(req.body);//result.error(joi package)
    if(error)
        return res.status(400).send(error.details[0].message);
    
    const society= new Society({
        name: req.body.name,
		president: req.body.president,
        data3: req.body.data3,
        data4: req.body.data4,
        data5: req.body.data5
    });
    
    await society.save();

    res.send({message:'Society Registeration Successful',link:'/'});
});

module.exports= router;