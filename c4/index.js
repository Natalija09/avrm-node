const express = require('express');
const hbs = require('hbs');
const bodyParser = require ('body-parser');
const fs = require ('fs');



var app = express();
app.set('view engine','hbs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    //res.send('ok');
    res.render('main');
});

app.get('/ime/:ime',(req,res)=>{
    let data ={
        ime: req.params.ime,
        prezime: 'studentovski',
        denovi: ['pon','vto','sre','cet','pet','sab','ned']
    };
    res.render('ime',data);
});
app.get('/students',(req,res)=>{
fs.readFile('studenti.json','utf8', (err,data)=>{
    if(err){
        res.status(400).send("bad request");
        return;
    }
    let out = {
        students: JSON.parse(data)
    };
    res.render('students',out);
});

app.listen(8080,(err)=>{
    if(err){
        console.log('could not start server', err);
        return;
    }
    console.log('server started successfully')
});
});
