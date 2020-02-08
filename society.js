const Joi= require('joi');
const mongoose =require('mongoose');

const Society= mongoose.model('societies', new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    president: {
        type: String,
        required: true
    },
    data3: {
        type: String,
        required: true
    },
    data4: {
        type: String,
        required: true
    },
    data5: {
        type: String,
        required: true
    }
})
);

function validateSociety(society){    
    const schema= {
        name: Joi.string().min(1).max(50).required(),
        president: Joi.string().min(1).max(50).required(),
        data3: Joi.string().min(1).max(50).required(),
        data4: Joi.string().min(1).max(50).required(),
        data5: Joi.string().min(1).max(50).required()
    };
    return Joi.validate(society, schema);
}

module.exports.Society= Society;
module.exports.validate=validateSociety;