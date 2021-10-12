const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    email: {
        type:String,
        unique: true,
        validate:{
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false
        },
    },
    password: {
        type:String,
        required:true
    },
    phone: {
        type: String,
       // match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
    }
},
{timestamps: true});

module.exports = mongoose.model('User', userSchema);