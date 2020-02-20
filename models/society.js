const Joi= require('joi');
const mongoose =require('mongoose');

const Society= mongoose.model('lists', new mongoose.Schema({
    Society_Name: {
        type: String,
        required: true
    },
    Event_Name: {
        type: String,
        required: true
    },
    Co_ordinator1: {
        type: String,
        required: true
    },
    Co_ordinator2: {
        type: String,
        required: true
    },
    Rules: {
        type: String,
        required: true
    },
    Venue: {
        type: String,
        required: true
    }
})
);

function validateSociety(society){    
    const schema= {
        society: Joi.string().min(1).max(50).required(),
        event: Joi.string().min(1).max(50).required(),
        c1: Joi.string().min(1).max(50).required(),
        c2: Joi.string().min(1).max(50).required(),
        rules: Joi.string().min(1).max(300).required(),
        venue: Joi.string().min(1).max(50).required()
    };
    return Joi.validate(society, schema);
}

module.exports.Society= Society;
module.exports.validate=validateSociety;