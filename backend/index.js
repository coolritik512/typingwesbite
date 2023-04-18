const express = require('express');
const path = require('./router/path.js');
const cors = require('cors');
const adminpath = require('./router/admin');

var db = require('./db/index');
db();



const app=express();

const port=8000;
app.use(express.json());
app.use(express.urlencoded());


app.use(cors({credentials:true , origin:'https://typingwesbite-production.up.railway.app/'}));
app.use('/',path);
app.use('/admin',adminpath);

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})

