const express= require('express');
const router= express.Router();
const {Register, validate}= require('../models/register');
const {Society}= require('../models/society');

router.get('/:Event',async function(req,res){
    res.status(200).render('register',{Event: req.params.Event});
});

router.post('/:Event',async (req,res)=>{
    const {error}= validate(req.body);//result.error(joi package)
    if(error)
        return res.status(400).send(error.details[0].message);

    let user= await Register.findOne({ email: req.body.email});
    if(user)
        return res.status(400).send('User already registered..');
    
    const register= new Register({
        event_name: req.params.Event,
        team_name: req.body.team_name,
        team_leader: req.body.team_leader,
        total_members: req.body.total_members,
		college_name: req.body.college_name,
        email: req.body.email,
        contact: req.body.contact
    });
    
    await register.save();

    res.send({message:'Registeration Successful',link:'/'});
});

module.exports= router;