const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.listen(3000);

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post('/', urlencodedParser, (req, res)=>{
    console.log(req.body.newWord);
});