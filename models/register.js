const Joi= require('joi');
const mongoose =require('mongoose');

const Register= mongoose.model('registrations', new mongoose.Schema({
    event_name:{
        type: String,
        required: true
    },
    team_name: {
        type: String,
        required: true
    },
    team_leader: {
        type: String,
        required: true
    },
    total_members:{
        type: String,
        required: true
    },
    college_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
);

function validateRegister(register){    
    const schema= {
        team_name: Joi.string().min(1).max(50).required(),
        team_leader: Joi.string().min(1).max(50).required(),
        college_name: Joi.string().min(1).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        contact: Joi.string().required(),
        total_members: Joi.string().required()
    };
    return Joi.validate(register, schema);
}

module.exports.Register= Register;
module.exports.validate=validateRegister;