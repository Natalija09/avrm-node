const mongoose = require('mongoose');
const fs = require ('fs');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require ('body-parser');
const app = express();
app.set('view engine','hbs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(`${__dirname}/public`));


mongoose.connect('mongodb+srv://dev:natalija09@cluster0-ppcd0.mongodb.net/ecommence?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
},
(err)=>{
    if(err){
        console.log("could not connect to database");
        console.log(err);
    }
    return;
}
);


const Students = mongoose.model(
    'students',{
        ime: String,
        prezime: String,
        prosek: Number
    },
    'students'
);
app.get('/',(req,res)=>{
    Students.find({},(err,data)=>{
        if(err){
            return console.log(err)
        }
        console.log(data);
        res.render('main',{students:data});
    });
});

app.listen(4200,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Server is running on 4200')
});

//read
Students.find({}, (err,data)=>{
    if(err){
        return console.log(err);

    }
    console.log(data);
});

//create
// let s = new Students({
//     ime: "Dila",
//     prezime: "Smokvarska",
//     prosek: 8
  
// });

// s.save((err)=>{
//     if(err){
//         return console.log(err)
//     }
// });

//update
Students.updateOne(
    {_id:'5e73b557fe8187837ecf41a2'},
    {
        ime: "Lila"
    },
    (err)=>{
        if(err){
            return console.log(err);
        }
        console.log('User update successful')
    }
);

//delete
Students.deleteOne({_id:'5e73b598fe8187837ecf53c9'}, (err) =>{
    if(err){
        return console.log(err);
    }
    console.log('User deleted successfuly')
    });