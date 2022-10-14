const mongoose = require('mongoose');


const pnaSchema=new mongoose.Schema({
    text:{
        type:String,
        // required : true
    },
})


const pan = mongoose.model('word',pnaSchema);

module.exports = pan;