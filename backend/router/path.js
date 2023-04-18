const express = require('express');
const router = express.Router();
var db = require('../db/index');
db();

var panmodel = require('../db/models/pan');
var wordmodel = require('../db/models/word');
var puncmodel = require('../db/models/punc');
var numbermodel = require('../db/models/number');



router.route('/text').post(function (req, res) {
    console.log('post re')
    var textdetails = req.body.textdetails;
    console.log(textdetails);
    if (textdetails.punctuation && textdetails.number) {
        console.log('both')
        panmodel.find(function (err, docs) {

            if (err) {
                res.end("eroor");
            }
            else {
                res.end(JSON.stringify({ text: docs[Math.floor(Math.random() * docs.length) - 1] }));
            }
        })
    }
    else if (textdetails.punctuation) {
        console.log('punc');
        puncmodel.find(function (err, docs) {

            if (err) {
                res.end("eroor");
            }
            else {
                res.end(JSON.stringify({ text: docs[Math.floor(Math.random() * docs.length) - 1] }));
            }
        })
    }
    else if (!(textdetails.punctuation && textdetails.number)) {
        console.log('word');

        wordmodel.find(function (err, docs) {
            console.log(Math.floor(Math.random() * docs.length))
            if (err) {
                res.end("eroor");
            }
            else {
                console.log('hello');
                res.end(JSON.stringify({ 'text': docs[Math.floor(Math.random() * docs.length) - 1] }));
            }
        })
    }
}).get(function (req, res) {
    console.log('hello');
    res.end('hat');
});


module.exports = router;