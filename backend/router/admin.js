const express = require('express');
const router=express.Router();

var db = require('../db/index');
db();


var panmodel = require('../db/models/pan');
var wordmodel = require('../db/models/word');
var puncmodel = require('../db/models/punc');
var numbermodel = require('../db/models/number')

router.route('/save').post(function(req,res){
    console.log('saving');
    console.log(req.body);

    if(req.body.option=='word'){
        console.log('word');

        var obj={text : req.body.text};
        // console.log(text);
        wordmodel.create(obj, function (err) {
            if (err) {
                res.redirect('http://localhost:3000/');
            }
            else {
                res.redirect('http://localhost:3000/');
            }
        });
    }
    else if(req.body.option=='p&n'){
        console.log('p&n');
        var obj={text : req.body.text};

        panmodel.create(obj, function (err) {
            if (err) {
                res.end('http://localhost:3000/');
            }
            else {
                res.redirect('http://localhost:3000/');
            }
        });
    }
    else if(req.body.option=='punc'){
        console.log('punc');
        var obj={text : req.body.text};

        puncmodel.create(obj, function (err) {
            if (err) {
                res.redirect('http://localhost:3000/');
            }
            else {
                res.redirect('http://localhost:3000/');
            }
        });
    }
    else {
        var obj={text : req.body.text};
        numbermodel.create(obj, function (err) {
            console.log('number');

            if (err) {
                res.redirect('http://localhost:3000/');
            }
            else {
                res.redirect('http://localhost:3000/');
            }
        });
    }
    
});

module.exports = router;


