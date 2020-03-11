const fs = require ('fs');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require ('body-parser');




var app = express();

app.set('view engine','hbs');

app.use(bodyParser.urlencoded({extended: true}));




app.get('/postreviews',(req,res)=>{
    fs.readFile('./reviews.json', 'utf8', (err,data)=>{
        if(err){
            res.status(400).send("bad request");
            return;
        }
        let out = {
            reviews: JSON.parse(data)
        };
        res.render('reviews',out);
    });
    });

app.post('/postreviews',(req,res)=>{
    fs.readFile('./reviews.json','utf8',(err,data)=>{
        if(err) throw err;
        var data = JSON.parse(data);
        data.push({
            username: req.body.username,
            reviewtitle: req.body.reviewtitle,
            reviewpost: req.body.reviewpost

        });
        data.reverse();
        var data = JSON.stringify(data);
        fs.writeFile('./reviews.json',data,(err)=>{
            if(err) throw err;
            res.redirect('/postreviews')
        });
    });
});

app.get('/postreviews/delete/:id',(req,res)=>{
    fs.readFile('./reviews.json', 'utf8', (err,data)=>{
        if(err) throw err;
        data = JSON.parse(data);
        data = data.filter((v,i)=>{
            if(i!= req.params.id){
                return v;
            }
        });
        data = JSON.stringify(data);
        fs.writeFile('./reviews.json', data, (err)=>{
            if(err)throw err;
            res.redirect('/postreviews')
        });
    });
});


app.listen(4200,(err)=>{
    if(err){
        console.log('could not start server', err);
        return;
    }
    console.log('server started successfully')

});