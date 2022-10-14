const mongoose = require('mongoose');


const puncSchema=new mongoose.Schema({
    text:{
        type:String,
        // required : true
    },
})


const punc = mongoose.model('punc',puncSchema);

module.exports = punc;