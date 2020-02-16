const express= require('express');
const router= express.Router();
const {Register, validate}= require('../models/register');

router.get('/:item',async function(req,res){
    res.status(200).render('register',{item:req.params.item});
});

router.post('/',async (req,res)=>{
    const {error}= validate(req.body);//result.error(joi package)
    if(error)
        return res.status(400).send(error.details[0].message);

    let user= await Register.findOne({ email: req.body.email});
    if(user)
        return res.status(400).send('User already registered..');
    
    const register= new Register({
        name: req.body.name,
		college_name: req.body.college_name,
        email: req.body.email,
        contact: req.body.contact
    });
    
    await register.save();

    console.log("over");

    res.send({message:'Registeration Successful',link:'/'});
});

module.exports= router;