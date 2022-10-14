const mongoose = require('mongoose');


const numberSchema=new mongoose.Schema({
    text:{
        type:String,
        // required : true
    },
})


const number = mongoose.model('number',numberSchema);

module.exports = number;