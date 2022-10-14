var inti = function()
{
    var mongoose = require('mongoose');
    
    mongoose.connect('mongodb+srv://app:1234@cluster0.pli3z.mongodb.net/typing?retryWrites=true&w=majority').then(function(){
        console.log('db connected and working');
    });
}

module.exports = inti;